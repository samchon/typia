import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicTree = _test_random(
    "DynamicTree",
    () => typia.random<DynamicTree>(),
    typia.createAssert<typia.Primitive<DynamicTree>>(),
);