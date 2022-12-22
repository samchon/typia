import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleHierarchical = _test_message(
    "TupleHierarchical",
    typia.message<TupleHierarchical>(),
);