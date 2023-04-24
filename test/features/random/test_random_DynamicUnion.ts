import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_random_DynamicUnion = _test_random(
    "DynamicUnion",
    () => typia.random<DynamicUnion>(),
    typia.createAssert<typia.Primitive<DynamicUnion>>(),
);
