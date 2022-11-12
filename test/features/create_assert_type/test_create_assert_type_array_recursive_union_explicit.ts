import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_array_recursive_union_explicit =
    _test_assert_type(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createAssertType<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
