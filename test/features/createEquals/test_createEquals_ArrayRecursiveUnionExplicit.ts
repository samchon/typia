import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArrayRecursiveUnionExplicit = _test_equals(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    TSON.createEquals<ArrayRecursiveUnionExplicit>(),
);
