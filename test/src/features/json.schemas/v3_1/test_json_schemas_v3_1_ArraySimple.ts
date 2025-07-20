import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_schemas_v3_1_ArraySimple = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ArraySimple",
  })(typia.json.schemas<[ArraySimple], "3.1">());
