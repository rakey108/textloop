import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull().$defaultFn(() => new Date()),
  updatedAt: timestamp('updated_at').defaultNow().notNull().$defaultFn(() => new Date()),
}); 