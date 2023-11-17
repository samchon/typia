import { z } from "zod";

const Timestamp = z.object({
  time: z.number(),
  zone: z.number(),
});

const Channel = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  sequence: z.number(),
  exclusive: z.boolean(),
  priority: z.number(),
  created_at: Timestamp,
});

const Account = z.object({
  id: z.number(),
  code: z.string(),
  created_at: Timestamp,
});

const Enterprise = z.object({
  id: z.number(),
  account: Account,
  name: z.string(),
  grade: z.number(),
  created_at: Timestamp,
});

const Member = z.object({
  id: z.number(),
  account: Account,
  enterprise: z.union([z.null(), Enterprise]),
  emails: z.array(z.string()),
  created_at: Timestamp,
  authorized: z.boolean(),
});

const Customer = z.object({
  id: z.number(),
  channel: Channel,
  member: z.union([z.null(), Member]),
  account: z.union([z.null(), Account]),
  href: z.string(),
  referrer: z.string(),
  ip: z.tuple([z.number(), z.number(), z.number(), z.number()]),
  created_at: Timestamp,
});

export const ZodObjectHierarchical = Customer;
