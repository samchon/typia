import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_validateClone_ArrayRecursiveUnionExplicit =
    _test_misc_validateClone(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        typia.misc.createValidateClone<ArrayRecursiveUnionExplicit>(),
    );
