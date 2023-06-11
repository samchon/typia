import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createStringify_ArrayRecursiveUnionImplicit = _test_stringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    typia.createStringify<ArrayRecursiveUnionImplicit>(),
);
