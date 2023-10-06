import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createPrune_TypeTagObjectUnion = _test_misc_prune(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.misc.createPrune<TypeTagObjectUnion>());
