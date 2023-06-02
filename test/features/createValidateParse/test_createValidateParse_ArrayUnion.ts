import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createValidateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidateParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
