import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_v3_1_AtomicClass = _test_json_application({
  version: "3.1",
  name: "AtomicClass",
})(typia.json.application<AtomicClassApplication, "3.1">());

interface AtomicClassApplication {
  insert(first: AtomicClass): Promise<void>;
  reduce(first: AtomicClass, second: AtomicClass | null): Promise<AtomicClass>;
  coalesce(
    first: AtomicClass | null,
    second: AtomicClass | null,
    third?: AtomicClass | null,
  ): Promise<AtomicClass | null>;
}
