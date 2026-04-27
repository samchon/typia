import typia from "typia";

type Status = "pending" | "active" | "archived";
interface Member { id: string; name: string; }
interface RichClone {
  created: Date;
  bytes: Uint8Array;
  tags: Set<string>;
  scores: Map<string, number>;
  value: bigint;
}

export const statuses = typia.misc.literals<Status>();
export const booleans = typia.misc.literals<boolean>();
export const bigintLiterals = typia.misc.literals<1n | 2n>();
export const schemaName = typia.reflect.name<Member>();
export const inlineName = typia.reflect.name<{ value: string }>();
export const regularInlineName = typia.reflect.name<{ value: string }, true>();

export const toCamel = (input: { first_name: string; last_name: string }) =>
  typia.notations.camel<{ first_name: string; last_name: string }>(input);

export const toSnake = (input: { __userID: string; displayName: string }) =>
  typia.notations.snake<{ __userID: string; displayName: string }>(input);

export const pruneMember = (input: Member) =>
  typia.misc.prune<Member>(input);

export const cloneMember = (input: Member) =>
  typia.misc.clone<Member>(input);
export const cloneRich = (input: RichClone) =>
  typia.misc.clone<RichClone>(input);
export const randomMap = () => typia.random<Map<string, number>>();
export const randomSet = () => typia.random<Set<string>>();
export const createRandomMap = typia.createRandom<Map<string, number>>();
export const createRandomSet = typia.createRandom<Set<string>>();
