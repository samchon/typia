import * as t from "io-ts";

const Timestamp = t.type({
  time: t.number,
  zone: t.number,
});

const Channel = t.type({
  id: t.number,
  code: t.string,
  name: t.string,
  sequence: t.number,
  exclusive: t.boolean,
  priority: t.number,
  created_at: Timestamp,
});

const Account = t.type({
  id: t.number,
  code: t.string,
  created_at: Timestamp,
});

const Enterprise = t.type({
  id: t.number,
  account: Account,
  name: t.string,
  grade: t.number,
  created_at: Timestamp,
});

const Member = t.type({
  id: t.number,
  account: Account,
  enterprise: t.union([t.null, Enterprise]),
  emails: t.array(t.string),
  created_at: Timestamp,
  authorized: t.boolean,
});

const Customer = t.type({
  id: t.number,
  channel: Channel,
  member: t.union([t.null, Member]),
  account: t.union([t.null, Account]),
  href: t.string,
  referrer: t.string,
  ip: t.tuple([t.number, t.number, t.number, t.number]),
  created_at: Timestamp,
});

export const IoTsObjectHierarchical = Customer;
