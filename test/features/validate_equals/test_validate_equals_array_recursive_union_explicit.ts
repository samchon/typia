import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_array_recursive_union_explicit =
    _test_validate_equals(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.validateEquals(input),
    );
