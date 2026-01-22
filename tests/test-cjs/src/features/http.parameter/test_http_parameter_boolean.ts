import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_boolean = (): void => {
  TestValidator.equals("boolean")([
    typia.http.parameter<boolean>("0"),
    typia.http.parameter<boolean>("false"),
    typia.http.parameter<boolean>("1"),
    typia.http.parameter<boolean>("true"),
    typia.http.parameter<boolean | null>("null"),
  ])([false, false, true, true, null]);
  TestValidator.error("not a boolean")(() =>
    typia.http.parameter<boolean>("2"),
  );
};
