import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayAny = _test_validateClone(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createValidateClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
