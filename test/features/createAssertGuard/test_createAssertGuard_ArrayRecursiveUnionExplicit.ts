import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertGuard_ArrayRecursiveUnionExplicit =
    _test_assertGuard(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        typia.createAssertGuard<ArrayRecursiveUnionExplicit>(),
    );
