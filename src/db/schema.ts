import { bigint, pgTable, varchar } from "drizzle-orm/pg-core"

export const URLRecordTable = pgTable("url_records", {
  id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  shortURL: varchar({ length: 255 }).notNull(),
  originalURL: varchar({ length: 255 }).notNull(),
  urlCode: varchar({ length: 255 }).notNull().unique(),
})
