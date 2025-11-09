import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_schemas_v3_0_AtomicUnion = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "AtomicUnion",
  })(typia.json.schemas<[AtomicUnion], "3.0">());
