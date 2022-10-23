import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_array_recursive_union_implicit = _test_validate(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.validate(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
