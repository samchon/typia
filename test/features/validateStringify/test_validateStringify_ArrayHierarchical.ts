import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArrayHierarchical = _test_validateStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validateStringify(input),
    ArrayHierarchical.SPOILERS,
);