import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_clone_ArrayRecursiveUnionImplicit =
    _test_misc_clone<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        typia.misc.createClone<ArrayRecursiveUnionImplicit>(),
    );
