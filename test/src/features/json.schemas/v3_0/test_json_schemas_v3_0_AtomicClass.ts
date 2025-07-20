import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_schemas_v3_0_AtomicClass = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "AtomicClass",
  })(typia.json.schemas<[AtomicClass], "3.0">());
