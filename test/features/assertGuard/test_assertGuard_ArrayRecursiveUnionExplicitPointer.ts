import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertGuard_ArrayRecursiveUnionExplicitPointer =
    _test_assertGuard(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) => typia.assertGuard<ArrayRecursiveUnionExplicitPointer>(input),
    );
