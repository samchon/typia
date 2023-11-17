import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertGuardEquals_ArrayRecursiveUnionExplicit =
    _test_assertGuardEquals(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        typia.createAssertGuardEquals<ArrayRecursiveUnionExplicit>(),
    );
