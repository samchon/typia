import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_schema_v3_1_AtomicAlias = _test_json_schema({
  version: "3.1",
  name: "AtomicAlias",
})(typia.json.schema<AtomicAlias, "3.1">());
