import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_DynamicUnion = _test_random(
    "DynamicUnion",
    typia.createRandom<DynamicUnion>(),
    typia.createAssert<DynamicUnion>(),
);
