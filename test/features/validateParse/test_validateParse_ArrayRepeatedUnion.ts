import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_validateParse_ArrayRepeatedUnion = _test_validateParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.validateParse<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
