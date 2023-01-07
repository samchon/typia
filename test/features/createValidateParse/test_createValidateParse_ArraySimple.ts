import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArraySimple = _test_validateParse(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);