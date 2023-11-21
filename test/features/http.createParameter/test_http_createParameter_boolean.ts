import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_boolean = () => {
  const decoder = typia.http.createParameter<boolean>();

  TestValidator.equals("parameter<boolean>(boolean)")(decoder("false"))(false);
  TestValidator.equals("parameter<boolean>(boolean)")(decoder("1"))(true);

  TestValidator.error("parameter<boolean>(null)")(() => decoder("null"));
  TestValidator.error("parameter<boolean>(string)")(() => decoder("one"));
  TestValidator.error("parameter<boolean>(number)")(() =>
    typia.http.parameter<number>("3.14"),
  );
};
