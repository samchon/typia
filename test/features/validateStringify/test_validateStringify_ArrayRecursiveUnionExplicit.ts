import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArrayRecursiveUnionExplicit =
    _test_validateStringify(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.validateStringify(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
