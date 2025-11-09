import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_stringify_ArrayHierarchicalPointer = (): void => _test_json_stringify(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.json.stringify<ArrayHierarchicalPointer>(input));
