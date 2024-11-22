import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_application_v3_0_AtomicSimple = _test_json_application({
  version: "3.0",
  name: "AtomicSimple",
})(typia.json.application<AtomicSimpleApplication, "3.0">());

interface AtomicSimpleApplication {
  insert(first: AtomicSimple): Promise<void>;
  reduce(
    first: AtomicSimple,
    second: AtomicSimple | null,
  ): Promise<AtomicSimple>;
  coalesce(
    first: AtomicSimple | null,
    second: AtomicSimple | null,
    third?: AtomicSimple | null,
  ): Promise<AtomicSimple | null>;
}
