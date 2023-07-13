import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_isStringify_ArrayHierarchical = _test_json_isStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.json.createIsStringify<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
