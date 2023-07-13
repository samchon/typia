import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_assertPrune_ConstantIntersection =
    _test_misc_assertPrune(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.misc.createAssertPrune<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
