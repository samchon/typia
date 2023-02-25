import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicUnion = _test_random(
    "DynamicUnion",
    () => typia.random<DynamicUnion>(),
    typia.createAssert<DynamicUnion>(),
);
