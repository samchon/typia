import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_schema_v3_1_AtomicClass = _test_json_schema({
  version: "3.1",
  name: "AtomicClass",
})(typia.json.schema<AtomicClass, "3.1">());
