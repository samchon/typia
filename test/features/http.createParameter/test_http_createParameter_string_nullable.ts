import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_string_nullable = () => {
  const decoder = typia.http.createParameter<string | null>();
  const value: string | null = decoder("something");

  TestValidator.equals("parameter<string | null>(string)")(value)("something");
  TestValidator.equals("parameter<string | null>(null)")(decoder("null"));
};
