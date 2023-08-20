import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_equals_ArrayRecursiveUnionImplicit = _test_equals(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.equals<ArrayRecursiveUnionImplicit>(input),
);
