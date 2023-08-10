import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_prune_ArrayRecursiveUnionImplicit =
    _test_misc_prune<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        (input) => typia.misc.prune<ArrayRecursiveUnionImplicit>(input),
    );
