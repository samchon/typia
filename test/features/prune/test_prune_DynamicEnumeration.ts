import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_prune_DynamicEnumeration = _test_prune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.prune(input),
);
