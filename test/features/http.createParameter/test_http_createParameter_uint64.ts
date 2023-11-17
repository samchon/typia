import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_uint64 = () => {
  const decoder = typia.http.createParameter<uint64>();
  const value: uint64 = decoder("2000");
  TestValidator.equals("parameter<uint64>(uint64)")(value)(2000n);

  TestValidator.error("parameter<uint64>(int64)")(() => decoder("-2000"));
  TestValidator.error("parameter<uint64>(double)")(() => decoder("3.14"));

  TestValidator.error("parameter<uint64>(null)")(() => decoder("null"));
  TestValidator.error("parameter<uint64>(string)")(() => decoder("one"));
  TestValidator.error("parameter<uint64>(boolean)")(() => decoder("false"));
};

type uint64 = bigint & tags.Type<"uint64">;
