import typia from "typia";

export const check = (input: unknown): boolean => typia.is<string>(input);
