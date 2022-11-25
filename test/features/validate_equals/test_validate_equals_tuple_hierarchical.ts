import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_tuple_hierarchical = _test_validate_equals(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.validateEquals(input),
);
