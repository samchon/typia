import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createIsClone_ArrayRecursiveUnionExplicit = _test_isClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createIsClone<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
