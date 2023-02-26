import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createValidateStringify_ArrayRecursiveUnionImplicit =
    _test_validateStringify(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createValidateStringify<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
