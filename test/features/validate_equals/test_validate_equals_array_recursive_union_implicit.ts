import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_array_recursive_union_implicit =
    _test_validate_equals(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.validateEquals(input),
    );
