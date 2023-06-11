import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertParse_ArrayUnion = _test_assertParse(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
