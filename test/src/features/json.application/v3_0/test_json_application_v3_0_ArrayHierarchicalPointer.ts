import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_application_v3_0_ArrayHierarchicalPointer =
  _test_json_application({
    version: "3.0",
    name: "ArrayHierarchicalPointer",
  })(typia.json.application<ArrayHierarchicalPointerApplication, "3.0">());

interface ArrayHierarchicalPointerApplication {
  insert(first: ArrayHierarchicalPointer): Promise<void>;
  reduce(
    first: ArrayHierarchicalPointer,
    second: ArrayHierarchicalPointer | null,
  ): Promise<ArrayHierarchicalPointer>;
  coalesce(
    first: ArrayHierarchicalPointer | null,
    second: ArrayHierarchicalPointer | null,
    third?: ArrayHierarchicalPointer | null,
  ): Promise<ArrayHierarchicalPointer | null>;
}
