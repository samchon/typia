import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate } from "./_test_validate";

export const test_validate_tuple_hierarchical = _test_validate(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.validate(input),
    TupleHierarchical.SPOILERS,
);
