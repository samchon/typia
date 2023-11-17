import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertGuard_ArrayRecursiveUnionImplicit = _test_assertGuard(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.assertGuard<ArrayRecursiveUnionImplicit>(input),
);
