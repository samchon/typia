import typia, { tags } from "typia";

export const is_email = (input: unknown): boolean =>
  typia.is<string & tags.Format<"email">>(input);

export const is_uuid = (input: unknown): boolean =>
  typia.is<string & tags.Format<"uuid">>(input);

export const is_ipv4 = (input: unknown): boolean =>
  typia.is<string & tags.Format<"ipv4">>(input);

export const is_short_name = (input: unknown): boolean =>
  typia.is<string & tags.MinLength<2> & tags.MaxLength<10>>(input);

export const is_positive_int = (input: unknown): boolean =>
  typia.is<number & tags.Type<"int32"> & tags.Minimum<1>>(input);

export const is_even = (input: unknown): boolean =>
  typia.is<number & tags.MultipleOf<2>>(input);

export const is_pattern = (input: unknown): boolean =>
  typia.is<string & tags.Pattern<"^[A-Z][a-z]+$">>(input);

export const is_date_time = (input: unknown): boolean =>
  typia.is<string & tags.Format<"date-time">>(input);

export const is_url = (input: unknown): boolean =>
  typia.is<string & tags.Format<"url">>(input);

export const is_duration = (input: unknown): boolean =>
  typia.is<string & tags.Format<"duration">>(input);

export const is_json_pointer = (input: unknown): boolean =>
  typia.is<string & tags.Format<"json-pointer">>(input);
