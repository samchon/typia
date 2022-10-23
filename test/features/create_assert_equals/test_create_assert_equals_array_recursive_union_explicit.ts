import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_array_recursive_union_explicit =
    _test_assert_equals(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createAssertEquals<ArrayRecursiveUnionExplicit>(),
    );
