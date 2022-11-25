import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayRecursiveUnionImplicit = _test_validateEquals(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createValidateEquals<ArrayRecursiveUnionImplicit>(),
);