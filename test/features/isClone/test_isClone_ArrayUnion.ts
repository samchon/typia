import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_isClone_ArrayUnion = _test_isClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isClone<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
