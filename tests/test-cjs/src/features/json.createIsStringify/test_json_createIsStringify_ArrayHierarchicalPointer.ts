import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createIsStringify_ArrayHierarchicalPointer = (): void =>
  _test_json_isStringify("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )(typia.json.createIsStringify<ArrayHierarchicalPointer>());
