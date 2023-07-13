import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_random_ConstantIntersection = _test_random(
    "ConstantIntersection",
    typia.createRandom<ConstantIntersection>(),
    typia.createAssert<typia.Primitive<ConstantIntersection>>(),
);
