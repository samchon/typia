import typia from "typia";

interface Something<T> {
  add(x: number, y: number): Promise<number>;
  plus(x: T, y: T): T;
  asyncPlus(x: T, y: T): Promise<T>;
}

typia.llm.application<Something<number>>();
