import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_number = () => {
  const decoder = typia.http.createParameter<number>();
  const value: number = decoder("3.14");
  TestValidator.equals("parameter<number>(number)")(value)(3.14);

  TestValidator.error("parameter<number>(null)")(() => decoder("null"));
  TestValidator.error("parameter<number>(string)")(() => decoder("one"));
  TestValidator.error("parameter<number>(boolean)")(() => decoder("false"));
};
