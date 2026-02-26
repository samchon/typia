import * as t from "io-ts";

import { ObjectRecursive } from "../pure/ObjectRecursive";

const Timestamp = t.type({
  time: t.number,
  zone: t.number,
});

const Department: t.Type<ObjectRecursive.IDepartment> = t.recursion(
  "Department",
  () =>
    t.type({
      parent: t.union([Department, t.null]),
      id: t.number,
      code: t.string,
      name: t.string,
      sequence: t.number,
      created_at: Timestamp,
    }),
);

export const IoTsObjectRecursive = Department;
