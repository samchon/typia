import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_schemas_v3_1_AtomicAlias = _test_json_schemas({
  version: "3.1",
  name: "AtomicAlias",
})(typia.json.schemas<[AtomicAlias], "3.1">());
