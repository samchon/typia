import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tuple_hierarchical = _test_validate(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createValidate<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
