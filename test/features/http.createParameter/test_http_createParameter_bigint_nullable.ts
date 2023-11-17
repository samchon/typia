import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_bigint_nullable = () => {
  const decoder = typia.http.createParameter<bigint | null>();
  const value: bigint | null = decoder("270");

  TestValidator.equals("parameter<bigint>(bigint)")(value)(270n);
  TestValidator.equals("parameter<bigint | null>(null)")(decoder("null"));

  TestValidator.error("parameter<bigint>(string)")(() => decoder("one"));
  TestValidator.error("parameter<bigint>(boolean)")(() => decoder("false"));
};
