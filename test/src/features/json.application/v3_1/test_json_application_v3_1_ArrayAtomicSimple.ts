import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_application_v3_1_ArrayAtomicSimple =
  _test_json_application({
    version: "3.1",
    name: "ArrayAtomicSimple",
  })(typia.json.application<ArrayAtomicSimpleApplication, "3.1">());

interface ArrayAtomicSimpleApplication {
  insert(first: ArrayAtomicSimple): Promise<void>;
  reduce(
    first: ArrayAtomicSimple,
    second: ArrayAtomicSimple | null,
  ): Promise<ArrayAtomicSimple>;
  coalesce(
    first: ArrayAtomicSimple | null,
    second: ArrayAtomicSimple | null,
    third?: ArrayAtomicSimple | null,
  ): Promise<ArrayAtomicSimple | null>;
}
