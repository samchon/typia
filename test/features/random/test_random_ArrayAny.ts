import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayAny = _test_random(
    "ArrayAny",
    () => typia.random<ArrayAny>(),
    typia.createAssert<ArrayAny>(),
);
