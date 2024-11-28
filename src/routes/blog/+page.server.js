import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export async function load() {
    const pb = new PocketBase(PB_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    // Fetch all records
    const records = await pb.collection('posts').getFullList({
        sort: '-title',
    });

    // Add slug field to each record with the title and id
    records.forEach(record => {
        record.slug = record.title
            .toLowerCase()            // Convert to lowercase
            .replace(/\s+/g, '-')     // Replace spaces with hyphens
            .replace(/[^\w-]+/g, '')  // Remove special characters
            + `-${record.id}`;       // Append the record's id to the slug
    });

    return {
        records
    };
}
