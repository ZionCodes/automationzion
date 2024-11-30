import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export async function load() {
    const pb = new PocketBase(PB_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    // Fetch all records
    const records = await pb.collection('tools').getFullList({
        sort: 'name',
    });

    return {
        records
    };
}
