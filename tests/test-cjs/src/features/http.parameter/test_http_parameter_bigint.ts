import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_bigint = (): void => {
  TestValidator.equals("boolean")([
    typia.http.parameter<bigint>("0"),
    typia.http.parameter<bigint>("1"),
    typia.http.parameter<bigint>("2"),
    typia.http.parameter<bigint>("3"),
    typia.http.parameter<bigint | null>("null"),
  ])([0n, 1n, 2n, 3n, null]);
  TestValidator.error("not a bigint")(() =>
    typia.http.parameter<bigint>("two"),
  );
  TestValidator.error("decimal number")(() =>
    typia.http.parameter<bigint>("3.141592"),
  );
  TestValidator.error("type assertion")(() =>
    typia.http.parameter<bigint & tags.Type<"uint64">>("-1"),
  );
};
