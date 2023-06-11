import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_isParse_ArrayUnion = _test_isParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
