import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_schema_v3_0_AtomicSimple = _test_json_schema({
  version: "3.0",
  name: "AtomicSimple",
})(typia.json.schema<AtomicSimple, "3.0">());
