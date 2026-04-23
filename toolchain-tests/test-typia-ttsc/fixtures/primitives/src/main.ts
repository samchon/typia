import typia from "typia";

export const check_string = (input: unknown): boolean =>
  typia.is<string>(input);

export const check_number = (input: unknown): boolean =>
  typia.is<number>(input);

export const check_boolean = (input: unknown): boolean =>
  typia.is<boolean>(input);

export const check_bigint = (input: unknown): boolean =>
  typia.is<bigint>(input);

export const check_any = (input: unknown): boolean =>
  typia.is<any>(input);
