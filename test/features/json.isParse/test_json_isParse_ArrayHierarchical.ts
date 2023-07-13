import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_isParse_ArrayHierarchical = _test_json_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.json.isParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
