import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_array_recursive_union_implicit =
    _test_assert_stringify(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.assertStringify(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
