import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_validate_ArrayRepeatedOptional = _test_validate(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
    typia.createValidate<ArrayRepeatedOptional>(),
);
