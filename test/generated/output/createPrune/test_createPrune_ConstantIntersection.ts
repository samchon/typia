import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createPrune_ConstantIntersection = _test_prune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: ConstantIntersection): void => {},
);
