import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_string = (): void => {
  TestValidator.error("type assertion")(() =>
    typia.http.parameter<string & tags.Format<"uuid">>("not an uuid value"),
  );
};
