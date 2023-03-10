import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createValidateParse_ArraySimple = _test_validateParse(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
