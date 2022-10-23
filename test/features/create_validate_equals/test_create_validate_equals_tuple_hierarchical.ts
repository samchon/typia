import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tuple_hierarchical =
    _test_validate_equals(
        "hierarchical tuple",
        TupleHierarchical.generate,
        TSON.createValidateEquals<TupleHierarchical>(),
    );
