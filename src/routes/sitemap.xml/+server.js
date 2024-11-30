// /src/routes/sitemap.xml/+server.js
import * as sitemap from 'super-sitemap';
import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

export const GET = async () => {
  // Initialize PocketBase client
  const pb = new PocketBase(PB_URL);

  // Authenticate admin user
  await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

  // Fetch all blog posts
  const records = await pb.collection('posts').getFullList({
    sort: '-title',
  });

  // Generate slugs for each post
  const blogSlugs = records.map(record => {
    return record.title
      .toLowerCase()            // Convert to lowercase
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '')  // Remove special characters
      + `-${record.id}`;       // Append the record's id to the slug
  });

  // Return the sitemap response
  return await sitemap.response({
    origin: 'http://localhost:3000', // Replace with your local or production URL
    paramValues: {
      '/blog/[slug]': blogSlugs, // Use generated slugs for the /blog/[slug] route
    },
  });
};
