import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createIsPrune_ArrayUnion = _test_isPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsPrune<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
