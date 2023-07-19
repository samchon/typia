import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_equals_ArrayRecursiveUnionExplicit =
    _test_equals<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        (input) => typia.equals(input),
    );
