import typia from "typia";

type Status = "pending" | "active" | "archived";
interface Member {
  id: string;
  name: string;
}
interface RichClone {
  created: Date;
  bytes: Uint8Array;
  tags: Set<string>;
  scores: Map<string, number>;
  value: bigint;
}
type UnionClone = string | { id: string; nested_value: { first_name: string } };
type DynamicClone = { fixed_value: string } & Record<
  `extra_${string}`,
  { first_name: string }
>;
type AdditionalClone = Record<string, { first_name: string }>;
interface RecursiveClone {
  name_value: string;
  children: RecursiveClone[];
}
type RecursiveRandomCollections = {
  name: string;
  tags: Set<string>;
  scores: Map<string, number>;
  children: RecursiveRandomCollections[];
} & Record<`extra_${string}`, string>;
/**
 * Reflect object docs.
 *
 * @deprecated Object deprecated.
 */
interface ReflectTarget {
  /**
   * Visible property docs.
   *
   * @deprecated Use replacement.
   * @example
   *   first sample
   *
   * @example
   *   second sample
   */
  readonly value: `prefix-${number}`;
}
type ReflectRegularFlag = true;
type ReflectNonRegularFlag = false;

export const statuses = typia.misc.literals<Status>();
export const booleans = typia.misc.literals<boolean>();
export const bigintLiterals = typia.misc.literals<1n | 2n>();
export const schemaName = typia.reflect.name<Member>();
export const inlineName = typia.reflect.name<{ value: string }>();
export const regularInlineName = typia.reflect.name<{ value: string }, true>();
export const regularAliasName = typia.reflect.name<
  { value: string },
  ReflectRegularFlag
>();
export const nonRegularAliasName = typia.reflect.name<
  { value: string },
  ReflectNonRegularFlag
>();
export const regularConditionalName = typia.reflect.name<
  { value: string },
  1 extends 1 ? true : false
>();
export const reflected = typia.reflect.schema<ReflectTarget>();

export const toCamel = (input: { first_name: string; last_name: string }) =>
  typia.notations.camel<{ first_name: string; last_name: string }>(input);

export const toSnake = (input: { __userID: string; displayName: string }) =>
  typia.notations.snake<{ __userID: string; displayName: string }>(input);

export const pruneMember = (input: Member) => typia.misc.prune<Member>(input);

export const cloneMember = (input: Member) => typia.misc.clone<Member>(input);
export const cloneRich = (input: RichClone) =>
  typia.misc.clone<RichClone>(input);
export const cloneNativeString = (input: String) =>
  typia.misc.clone<String>(input);
export const cloneUnion = (input: UnionClone) =>
  typia.misc.clone<UnionClone>(input);
export const notationUnion = (input: UnionClone) =>
  typia.notations.camel<UnionClone>(input);
export const cloneDynamic = (input: DynamicClone) =>
  typia.misc.clone<DynamicClone>(input);
export const notationDynamic = (input: DynamicClone) =>
  typia.notations.camel<DynamicClone>(input);
export const cloneAdditional = (input: AdditionalClone) =>
  typia.misc.clone<AdditionalClone>(input);
export const notationAdditional = (input: AdditionalClone) =>
  typia.notations.camel<AdditionalClone>(input);
export const cloneRecursive = (input: RecursiveClone) =>
  typia.misc.clone<RecursiveClone>(input);
export const notationRecursive = (input: RecursiveClone) =>
  typia.notations.camel<RecursiveClone>(input);
export const randomMap = () => typia.random<Map<string, number>>();
export const randomSet = () => typia.random<Set<string>>();
export const createRandomMap = typia.createRandom<Map<string, number>>();
export const createRandomSet = typia.createRandom<Set<string>>();
export const randomRecursiveCollections = () =>
  typia.random<RecursiveRandomCollections>();
