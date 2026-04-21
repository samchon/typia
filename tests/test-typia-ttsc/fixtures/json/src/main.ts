import typia from "typia";

interface Point {
  x: number;
  y: number;
}

interface Member {
  id: string;
  name: string;
  active: boolean;
}

export const stringify_number = (input: number): string =>
  typia.json.stringify<number>(input);

export const stringify_string = (input: string): string =>
  typia.json.stringify<string>(input);

export const stringify_point = (input: Point): string =>
  typia.json.stringify<Point>(input);

export const stringify_member = (input: Member): string =>
  typia.json.stringify<Member>(input);

export const stringify_array = (input: number[]): string =>
  typia.json.stringify<number[]>(input);

export const parse_point = (input: string): Point =>
  typia.json.assertParse<Point>(input);

export const parse_member_maybe = (input: string): Member | null =>
  typia.json.isParse<Member>(input);
