import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_schema_v3_1_TypeTagArrayUnion = _test_json_schema({
  version: "3.1",
  name: "TypeTagArrayUnion",
})(typia.json.schema<TypeTagArrayUnion, "3.1">());
