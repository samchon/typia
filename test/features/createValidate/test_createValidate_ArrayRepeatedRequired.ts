import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createValidate_ArrayRepeatedRequired = _test_validate(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.createValidate<ArrayRepeatedRequired>(),
);
