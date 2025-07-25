import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_schema_v3_1_TypeTagArray = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagArray",
  })(typia.json.schema<TypeTagArray, "3.1">());
