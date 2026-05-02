import typia from "typia";

interface Point {
  x: number;
  y: number;
}

interface Member {
  id: string;
  email: string;
  age: number;
  active: boolean;
}

interface Nested {
  point: Point;
  owner: Member;
}

export const check_point = (input: unknown): boolean => typia.is<Point>(input);
export const check_member = (input: unknown): boolean =>
  typia.is<Member>(input);
export const check_nested = (input: unknown): boolean =>
  typia.is<Nested>(input);

export const check_string_array = (input: unknown): boolean =>
  typia.is<string[]>(input);

export const check_point_array = (input: unknown): boolean =>
  typia.is<Point[]>(input);

export const check_status = (input: unknown): boolean =>
  typia.is<"pending" | "active" | "archived">(input);

export const check_string_or_number = (input: unknown): boolean =>
  typia.is<string | number>(input);

export const check_nullable_string = (input: unknown): boolean =>
  typia.is<string | null>(input);

export const check_tuple = (input: unknown): boolean =>
  typia.is<[string, number, boolean]>(input);

// Recursive self-reference — exercises the analyzer's visitingObjects
// back-reference path and the collection's EmplaceObject dedup.
interface TreeNode {
  value: number;
  children: TreeNode[];
}
export const check_tree = (input: unknown): boolean =>
  typia.is<TreeNode>(input);
