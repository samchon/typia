import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createIsStringify_ArrayRecursiveUnionExplicit =
    _test_isStringify(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        typia.createIsStringify<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
