import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertClone<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
