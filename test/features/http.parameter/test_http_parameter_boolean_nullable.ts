import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_boolean_nullable = () => {
  TestValidator.equals("parameter<boolean | null>(boolean)")(
    typia.http.parameter<boolean | null>("false"),
  )(false);
  TestValidator.equals("parameter<boolean | null>(1)")(
    typia.http.parameter<boolean | null>("1"),
  )(true);
  TestValidator.equals("parameter<boolean | null>(null)")(
    typia.http.parameter<boolean | null>("null"),
  );

  TestValidator.error("parameter<boolean | null>(string)")(() =>
    typia.http.parameter<boolean | null>("one"),
  );
  TestValidator.error("parameter<boolean | null>(number)")(() =>
    typia.http.parameter<boolean | null>("3.14"),
  );
};
