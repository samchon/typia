import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_prune_ConstantIntersection =
    _test_misc_prune<ConstantIntersection>(ConstantIntersection)(
        typia.misc.createPrune<ConstantIntersection>(),
    );
