import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertGuardEquals_ArrayRecursiveUnionImplicit =
    _test_assertGuardEquals(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        typia.createAssertGuardEquals<ArrayRecursiveUnionImplicit>(),
    );
