import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayRecursiveUnionExplicit = _test_validate(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.validate(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);