import { sqliteTable, text, integer, blob} from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  username: text("username").notNull().unique(),
  password_hash: text("password_hash").notNull(),
  isAdmin: integer('id', { mode: 'boolean' }).notNull().default(false),
});

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at").notNull(),
});

export const companyTable = sqliteTable("company", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  website: text("website"),
});

export const jobTable = sqliteTable("job", {
  id: text("id").notNull().primaryKey(),
  companyId: text("company_id")
    .notNull()
    .references(() => companyTable.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements"),
  salary: text("salary"),
  location: text("location"),
  postedAt: integer("posted_at").notNull(),
});

export const waitlistTable = sqliteTable("waitlist", {
  id: text("id").notNull().primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at").notNull(),
});

export const cvTable = sqliteTable("cv", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  jobId: text("job_id")
    .references(() => jobTable.id),
  cv: blob("cv").notNull(),
  submittedAt: integer("submitted_at").notNull(),
  status: text("status").notNull(),
});

export const workshopTable = sqliteTable("workshop", {
  id: text("id").notNull().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: integer("date").notNull(),
  location: text("location"),
  capacity: integer("capacity"),
});