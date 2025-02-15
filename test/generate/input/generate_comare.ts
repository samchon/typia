import typia from "typia";

interface ISomething {
  id: string;
  age: number;
}

// export const objects = typia.compare.equals<ISomething>(
//   { id: "1", age: 2 },
//   { id: "1", age: 2 },
// );

// export const arrays = typia.compare.equals<number[]>([1, 2, 3], [1, 2, 3]);

export const tuple = typia.compare.equals<
  [number, string, { foo: string; bar?: string }]
>(
  [1, "foo", { foo: "bar", bar: "baz" }],
  [1, "foo", { foo: "bar", bar: "baz" }],
);

// export const nested = typia.compare.equals<{
//   id: number;
//   items: Array<{ name: string }>;
// }>({ id: 1, items: [{ name: "foo" }] }, { id: 1, items: [{ name: "foo" }] });
