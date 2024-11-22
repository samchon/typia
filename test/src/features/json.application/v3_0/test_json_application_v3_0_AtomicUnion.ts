import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_application_v3_0_AtomicUnion = _test_json_application({
  version: "3.0",
  name: "AtomicUnion",
})(typia.json.application<AtomicUnionApplication, "3.0">());

interface AtomicUnionApplication {
  insert(first: AtomicUnion): Promise<void>;
  reduce(first: AtomicUnion, second: AtomicUnion | null): Promise<AtomicUnion>;
  coalesce(
    first: AtomicUnion | null,
    second: AtomicUnion | null,
    third?: AtomicUnion | null,
  ): Promise<AtomicUnion | null>;
}
