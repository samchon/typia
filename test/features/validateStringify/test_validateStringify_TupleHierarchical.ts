import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TupleHierarchical = _test_validateStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validateStringify(input),
    TupleHierarchical.SPOILERS,
);