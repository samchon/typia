import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validateStringify_ArrayRecursiveUnionImplicit =
    _test_validateStringify(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => typia.validateStringify<ArrayRecursiveUnionImplicit>(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
