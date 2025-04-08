import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_schema_v3_0_AtomicIntersection = _test_json_schema({
  version: "3.0",
  name: "AtomicIntersection",
})(typia.json.schema<AtomicIntersection, "3.0">());
