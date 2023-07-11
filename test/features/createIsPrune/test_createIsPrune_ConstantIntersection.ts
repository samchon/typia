import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createIsPrune_ConstantIntersection = _test_isPrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createIsPrune<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
