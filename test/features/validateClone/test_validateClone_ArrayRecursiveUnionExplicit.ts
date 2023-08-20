import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_validateClone_ArrayRecursiveUnionExplicit =
    _test_validateClone(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.validateClone<ArrayRecursiveUnionExplicit>(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
