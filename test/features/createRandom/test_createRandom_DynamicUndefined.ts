import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createRandom_DynamicUndefined = _test_random(
    "DynamicUndefined",
    typia.createRandom<DynamicUndefined>(),
    typia.createAssert<typia.Primitive<DynamicUndefined>>(),
);
