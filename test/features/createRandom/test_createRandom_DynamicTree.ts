import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createRandom_DynamicTree = _test_random(
    "DynamicTree",
    typia.createRandom<DynamicTree>(),
    typia.createAssert<DynamicTree>(),
);
