import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_assertStringify_ArrayHierarchicalPointer =
    _test_json_assertStringify(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        typia.json.createAssertStringify<ArrayHierarchicalPointer>(),
    );
