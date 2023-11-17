import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertGuardEquals_ConstantIntersection =
    _test_assertGuardEquals("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )((input) => typia.assertGuardEquals<ConstantIntersection>(input));
