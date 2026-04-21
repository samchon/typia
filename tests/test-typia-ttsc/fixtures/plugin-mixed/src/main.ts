import typia from "typia";

const checker = typia.createIs<string>();

export const check = (input: unknown): boolean => checker(input);
