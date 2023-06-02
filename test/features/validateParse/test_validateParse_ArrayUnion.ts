import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_validateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validateParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
