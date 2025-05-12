import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_schemas_v3_1_AtomicClass = _test_json_schemas({
  version: "3.1",
  name: "AtomicClass",
})(typia.json.schemas<[AtomicClass], "3.1">());
