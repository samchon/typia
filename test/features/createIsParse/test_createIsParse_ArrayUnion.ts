import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createIsParse_ArrayUnion = _test_isParse(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
