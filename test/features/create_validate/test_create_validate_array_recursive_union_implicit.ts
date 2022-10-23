import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_array_recursive_union_implicit =
    _test_validate(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        TSON.createValidate<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
