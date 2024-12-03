import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_number = (): void => {
  TestValidator.equals("boolean")([
    typia.http.parameter<number>("0"),
    typia.http.parameter<number>("1"),
    typia.http.parameter<number>("2"),
    typia.http.parameter<number>("3"),
    typia.http.parameter<number | null>("null"),
  ])([0, 1, 2, 3, null]);
  TestValidator.error("not a number")(() =>
    typia.http.parameter<number>("two"),
  );
  TestValidator.error("type assertion")(() =>
    typia.http.parameter<number & tags.Type<"uint32">>("-1"),
  );
};
