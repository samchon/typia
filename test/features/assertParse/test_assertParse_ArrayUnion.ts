import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertParse_ArrayUnion = _test_assertParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
