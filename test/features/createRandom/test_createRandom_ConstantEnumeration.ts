import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ConstantEnumeration = _test_random(
    "ConstantEnumeration",
    typia.createRandom<ConstantEnumeration>(),
    typia.createAssert<ConstantEnumeration>(),
);
