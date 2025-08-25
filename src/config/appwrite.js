import { Client, Databases } from 'appwrite';

const client = new Client()
    // CORRECTED: Use the general cloud endpoint
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('68abdd82000cdf3e3fc8');

export const databases = new Databases(client);

// Your Database and Collection IDs remain the same
export const DATABASE_ID = '68abded70008172429f7';
export const CONTACT_COLLECTION_ID = '68abdf1100320e8c931e';
