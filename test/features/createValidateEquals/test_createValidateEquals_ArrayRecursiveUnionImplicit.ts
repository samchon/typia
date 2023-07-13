import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validateEquals_ArrayRecursiveUnionImplicit =
    _test_validateEquals(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createValidateEquals<ArrayRecursiveUnionImplicit>(),
    );
