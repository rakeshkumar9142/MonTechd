import { Client, Databases } from 'appwrite';

const client = new Client()
    // CORRECTED: Use the general cloud endpoint
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);

// Your Database and Collection IDs remain the same
export const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID
export const CONTACT_COLLECTION_ID = process.env.REACT_APP_APPWRITE_COLLECTION_ID
