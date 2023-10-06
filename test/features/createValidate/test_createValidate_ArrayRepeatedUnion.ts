import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createValidate_ArrayRepeatedUnion = _test_validate(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.createValidate<ArrayRepeatedUnion>(),
);
