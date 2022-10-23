import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_array_recursive_union_explicit =
    _test_validate_equals(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createValidateEquals<ArrayRecursiveUnionExplicit>(),
    );
