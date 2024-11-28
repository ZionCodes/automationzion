import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export async function load() {
    const pb = new PocketBase(PB_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    // Fetch the first 3 posts
    const response = await pb.collection('posts').getList(1, 3, {
        sort: '-created',
    });

    // Add slug field to each record, appending the id to the slug
    const records = response.items.map(record => {
        // Create slug from title and append the post's id
        record.slug = record.title
            .toLowerCase()            // Convert to lowercase
            .replace(/\s+/g, '-')     // Replace spaces with hyphens
            .replace(/[^\w-]+/g, '')  // Remove special characters
            + `-${record.id}`;       // Append the post's id to the slug

        return record;
    });

    return {
        records
    };
}
