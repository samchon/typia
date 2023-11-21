import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_string = () => {
  const value: string = typia.http.parameter<string>("something");
  TestValidator.equals("parameter<string>(string)")(value)("something");
  TestValidator.error("parameter<string>(null)")(() =>
    typia.http.parameter<string>("null"),
  );
};
