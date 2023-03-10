import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_message_TupleHierarchical = _test_message(
    "TupleHierarchical",
    typia.message<TupleHierarchical>(),
);
