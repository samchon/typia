import typia from "typia";

type Status = "pending" | "active" | "archived";
interface Member { id: string; name: string; }

export const statuses = typia.misc.literals<Status>();
export const schemaName = typia.reflect.name<Member>();

export const toCamel = (input: { first_name: string; last_name: string }) =>
  typia.notations.camel<{ first_name: string; last_name: string }>(input);

export const pruneMember = (input: Member) =>
  typia.misc.prune<Member>(input);

export const cloneMember = (input: Member) =>
  typia.misc.clone<Member>(input);
