import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createIs_ArrayRecursiveUnionImplicit = _test_is(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.createIs<ArrayRecursiveUnionImplicit>(),
);
