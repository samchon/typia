import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_random_ArrayAny = _test_random(
    "ArrayAny",
    () => typia.random<ArrayAny>(),
    typia.createAssert<typia.Primitive<ArrayAny>>(),
);
