import typia from "typia";

const func = typia.functional.assertFunction(
  (x: number, y: number): number => x + y,
);
func(3, 4);
func(4, 5);
