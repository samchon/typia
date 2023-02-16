import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ConstantEnumeration = _test_prune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createPrune<ConstantEnumeration>(),
);
