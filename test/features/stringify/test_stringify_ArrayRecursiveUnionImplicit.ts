import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayRecursiveUnionImplicit = _test_stringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.stringify(input),
);