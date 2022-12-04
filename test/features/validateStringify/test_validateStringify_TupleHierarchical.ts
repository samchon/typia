import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TupleHierarchical = _test_validateStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.validateStringify(input),
    TupleHierarchical.SPOILERS,
);
