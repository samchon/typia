import typia from "typia";

interface ISomething {
  id: string;
  age: number;
}

// export const objects = typia.compare.equals<ISomething>(
//   { id: "1", age: 2 },
//   { id: "1", age: 2 },
// );

export const arrays = typia.compare.equals<number[]>([1, 2, 3], [1, 2, 3]);
