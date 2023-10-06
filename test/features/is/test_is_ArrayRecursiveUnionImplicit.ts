import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_is_ArrayRecursiveUnionImplicit = _test_is(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.is<ArrayRecursiveUnionImplicit>(input),
);
