import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_prune_DynamicEnumeration = _test_misc_prune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.misc.prune(input),
);
