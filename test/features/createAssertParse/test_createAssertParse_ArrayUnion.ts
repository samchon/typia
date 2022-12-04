import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayUnion = _test_assertParse(
    "ArrayUnion",
    ArrayUnion.generate,
    TSON.createAssertParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
