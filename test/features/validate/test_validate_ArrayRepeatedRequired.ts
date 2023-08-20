import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_validate_ArrayRepeatedRequired = _test_validate(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validate<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
