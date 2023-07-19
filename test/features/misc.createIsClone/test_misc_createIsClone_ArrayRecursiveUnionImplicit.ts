import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_isClone_ArrayRecursiveUnionImplicit =
    _test_misc_isClone<ArrayRecursiveUnionImplicit>(
        ArrayRecursiveUnionImplicit,
    )(typia.misc.createIsClone<ArrayRecursiveUnionImplicit>());
