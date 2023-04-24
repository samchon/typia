import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createRandom_DynamicEnumeration = _test_random(
    "DynamicEnumeration",
    typia.createRandom<DynamicEnumeration>(),
    typia.createAssert<typia.Primitive<DynamicEnumeration>>(),
);
