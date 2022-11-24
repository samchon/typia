import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_array_recursive_union_explicit =
    _test_validate(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createValidate<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
