import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_validatePrune_ConstantIntersection =
    _test_misc_validatePrune("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )((input) => typia.misc.validatePrune<ConstantIntersection>(input));
