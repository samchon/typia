import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TupleHierarchical = _test_isStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.isStringify(input),
    TupleHierarchical.SPOILERS,
);
