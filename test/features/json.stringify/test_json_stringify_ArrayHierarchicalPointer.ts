import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_stringify_ArrayHierarchicalPointer =
    _test_json_stringify("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )((input) => typia.json.stringify<ArrayHierarchicalPointer>(input));
