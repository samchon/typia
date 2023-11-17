import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertGuardEquals_ConstantIntersection =
    _test_assertGuardEquals("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )(typia.createAssertGuardEquals<ConstantIntersection>());
