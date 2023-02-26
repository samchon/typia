import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_DynamicEnumeration = _test_random(
    "DynamicEnumeration",
    typia.createRandom<DynamicEnumeration>(),
    typia.createAssert<DynamicEnumeration>(),
);
