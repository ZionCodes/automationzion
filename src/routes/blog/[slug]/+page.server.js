import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export async function load({ params }) {
    const pb = new PocketBase(PB_URL);

    // Authenticate the admin user
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    // Extract the ID from the slug
    const slug = params.slug;
    const id = slug.split('-').pop(); // Extracts the ID from the slug (last part)

    // Fetch the blog post by its ID
    const post = await pb.collection('posts').getOne(id, {
        expand: 'title,introduction,id',
    });

    // Log the record to the console

    return {
        post, // Pass the blog post record to the page
    };
}
