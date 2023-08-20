import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertStringify<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
