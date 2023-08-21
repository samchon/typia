import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_validate_TupleHierarchical = _test_validate(
    "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.validate<TupleHierarchical>(input),
);
