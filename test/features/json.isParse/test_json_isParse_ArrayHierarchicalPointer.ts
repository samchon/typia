import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_isParse_ArrayHierarchicalPointer =
    _test_json_isParse<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        (input) => typia.json.isParse<ArrayHierarchicalPointer>(input),
    );
