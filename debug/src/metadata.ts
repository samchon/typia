import typia from "typia";

interface Something<T> {
  setValue: (x: T) => T;
}

typia.llm.application<Something<number>>();
