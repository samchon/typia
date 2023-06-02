import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_ArrayRepeatedUnion = _test_validate(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createValidate<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
