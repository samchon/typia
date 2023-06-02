import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createValidate_TupleHierarchical = _test_validate(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createValidate<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
