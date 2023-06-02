import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createStringify_ArrayRecursiveUnionExplicit = _test_stringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createStringify<ArrayRecursiveUnionExplicit>(),
);
