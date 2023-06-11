import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createIsStringify_ArrayUnion = _test_isStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
