import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_schema_v3_0_TypeTagMatrix = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagMatrix",
  })(typia.json.schema<TypeTagMatrix, "3.0">());
