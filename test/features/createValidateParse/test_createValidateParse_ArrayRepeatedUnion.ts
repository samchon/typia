import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createValidateParse_ArrayRepeatedUnion = _test_validateParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createValidateParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
