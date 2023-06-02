import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createValidate_ArrayRepeatedOptional = _test_validate(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    typia.createValidate<ArrayRepeatedOptional>(),
    ArrayRepeatedOptional.SPOILERS,
);
