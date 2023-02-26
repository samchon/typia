import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayUnion = _test_assertParse(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
