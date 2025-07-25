import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_schemas_v3_1_AtomicIntersection = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "AtomicIntersection",
  })(typia.json.schemas<[AtomicIntersection], "3.1">());
