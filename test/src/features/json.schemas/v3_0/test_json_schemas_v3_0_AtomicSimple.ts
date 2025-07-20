import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_schemas_v3_0_AtomicSimple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "AtomicSimple",
  })(typia.json.schemas<[AtomicSimple], "3.0">());
