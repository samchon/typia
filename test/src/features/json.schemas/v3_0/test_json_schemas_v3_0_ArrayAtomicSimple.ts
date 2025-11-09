import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_schemas_v3_0_ArrayAtomicSimple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayAtomicSimple",
  })(typia.json.schemas<[ArrayAtomicSimple], "3.0">());
