import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayUnion = _test_validateClone(
    "ArrayUnion",
    ArrayUnion.generate,
    TSON.createValidateClone<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
