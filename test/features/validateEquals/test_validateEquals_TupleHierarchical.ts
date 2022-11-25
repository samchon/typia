import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TupleHierarchical = _test_validateEquals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.validateEquals(input),
);