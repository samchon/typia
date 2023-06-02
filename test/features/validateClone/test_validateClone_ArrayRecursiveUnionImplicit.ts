import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validateClone_ArrayRecursiveUnionImplicit =
    _test_validateClone(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => typia.validateClone(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
