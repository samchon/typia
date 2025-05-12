import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_schemas_v3_1_AtomicSimple = _test_json_schemas({
  version: "3.1",
  name: "AtomicSimple",
})(typia.json.schemas<[AtomicSimple], "3.1">());
