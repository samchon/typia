import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_v3_0_ToJsonAtomicSimple =
  _test_json_application({
    version: "3.0",
    name: "ToJsonAtomicSimple",
  })(typia.json.application<ToJsonAtomicSimpleApplication, "3.0">());

interface ToJsonAtomicSimpleApplication {
  insert(first: ToJsonAtomicSimple): Promise<void>;
  reduce(
    first: ToJsonAtomicSimple,
    second: ToJsonAtomicSimple | null,
  ): Promise<ToJsonAtomicSimple>;
  coalesce(
    first: ToJsonAtomicSimple | null,
    second: ToJsonAtomicSimple | null,
    third?: ToJsonAtomicSimple | null,
  ): Promise<ToJsonAtomicSimple | null>;
}
