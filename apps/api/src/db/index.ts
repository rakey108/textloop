import { Pool } from 'pg';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false,
    } : false
});

// Test the connection
pool.connect((err, client, release) => {
    if (err) {
        logger.error('Error connecting to the database:', err);
        return;
    }
    logger.info('Successfully connected to the database');
    release();
});

export { pool }; 
