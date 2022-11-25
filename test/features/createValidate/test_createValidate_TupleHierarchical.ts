import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TupleHierarchical = _test_validate(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createValidate<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);