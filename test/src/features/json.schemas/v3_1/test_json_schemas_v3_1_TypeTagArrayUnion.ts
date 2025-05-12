import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_schemas_v3_1_TypeTagArrayUnion = _test_json_schemas({
  version: "3.1",
  name: "TypeTagArrayUnion",
})(typia.json.schemas<[TypeTagArrayUnion], "3.1">());
