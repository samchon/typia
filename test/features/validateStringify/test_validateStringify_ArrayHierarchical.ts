import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validateStringify_ArrayHierarchical = _test_validateStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validateStringify(input),
    ArrayHierarchical.SPOILERS,
);
