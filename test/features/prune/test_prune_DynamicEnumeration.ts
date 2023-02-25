import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_DynamicEnumeration = _test_prune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.prune(input),
);
