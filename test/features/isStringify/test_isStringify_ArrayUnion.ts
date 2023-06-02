import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_isStringify_ArrayUnion = _test_isStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isStringify(input),
    ArrayUnion.SPOILERS,
);
