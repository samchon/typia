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

interface JsonTree {
  value: string;
  children: JsonTree[];
}
type JsonNestedArray = JsonNestedArray[];
type DynamicJson = { fixed_value: string } & Record<
  `extra_${string}`,
  { first_name: string }
>;

export class ToJsonString {
  public constructor(private readonly value: string) {}

  public toJSON(): string {
    return this.value;
  }
}

export const stringify_number = (input: number): string =>
  typia.json.stringify<number>(input);

export const stringify_string = (input: string): string =>
  typia.json.stringify<string>(input);

export const stringify_literal = (input: "literal"): string =>
  typia.json.stringify<"literal">(input);

export const stringify_point = (input: Point): string =>
  typia.json.stringify<Point>(input);

export const stringify_point_inferred = (input: Point): string =>
  typia.json.stringify(input);

export const stringify_member = (input: Member): string =>
  typia.json.stringify<Member>(input);

export const stringify_array = (input: number[]): string =>
  typia.json.stringify<number[]>(input);

export const stringify_date = (input: Date): string =>
  typia.json.stringify<Date>(input);

export const stringify_union = (input: string | number): string =>
  typia.json.stringify<string | number>(input);

export const stringify_nullable_string = (input: string | null): string =>
  typia.json.stringify<string | null>(input);

export const stringify_to_json_string = (input: ToJsonString): string =>
  typia.json.stringify<ToJsonString>(input);

export const stringify_tree = (input: JsonTree): string =>
  typia.json.stringify<JsonTree>(input);

export const stringify_nested_array = (input: JsonNestedArray): string =>
  typia.json.stringify<JsonNestedArray>(input);

export const stringify_tuple = (input: [string, number, ...string[]]): string =>
  typia.json.stringify<[string, number, ...string[]]>(input);

export const stringify_dynamic = (input: DynamicJson): string =>
  typia.json.stringify<DynamicJson>(input);

export const parse_point = (input: string): Point =>
  typia.json.assertParse<Point>(input);

export const parse_point_custom = (input: string): Point =>
  typia.json.assertParse<Point>(input, (props) => {
    const error = new Error(`custom-json:${props.method}:${props.expected}`);
    error.name = "JsonCustomError";
    return error;
  });

export const create_parse_point_custom = typia.json.createAssertParse<Point>(
  (props) => {
    const error = new Error(`custom-json:${props.method}:${props.expected}`);
    error.name = "JsonCustomError";
    return error;
  },
);

export const assert_stringify_point_custom = (input: Point): string =>
  typia.json.assertStringify<Point>(input, (props) => {
    const error = new Error(`custom-json:${props.method}:${props.expected}`);
    error.name = "JsonCustomError";
    return error;
  });

export const create_assert_stringify_point_custom =
  typia.json.createAssertStringify<Point>((props) => {
    const error = new Error(`custom-json:${props.method}:${props.expected}`);
    error.name = "JsonCustomError";
    return error;
  });

export const parse_member_maybe = (input: string): Member | null =>
  typia.json.isParse<Member>(input);
