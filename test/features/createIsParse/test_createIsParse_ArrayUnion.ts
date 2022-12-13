import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayUnion = _test_isParse(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);