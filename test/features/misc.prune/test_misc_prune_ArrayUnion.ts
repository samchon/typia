import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_prune_ArrayUnion = _test_misc_prune(
    "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.misc.prune<ArrayUnion>(input));
