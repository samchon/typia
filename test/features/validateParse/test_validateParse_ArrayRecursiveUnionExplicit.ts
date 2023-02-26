import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_validateParse_ArrayRecursiveUnionExplicit =
    _test_validateParse(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.validateParse<ArrayRecursiveUnionExplicit>(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
