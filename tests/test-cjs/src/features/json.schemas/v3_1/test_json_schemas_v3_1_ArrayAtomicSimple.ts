import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_schemas_v3_1_ArrayAtomicSimple = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ArrayAtomicSimple",
  })(typia.json.schemas<[ArrayAtomicSimple], "3.1">());
