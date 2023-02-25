import typia from "../../../src";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayAny = _test_validate(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidate<ArrayAny>(),
    ArrayAny.SPOILERS,
);
