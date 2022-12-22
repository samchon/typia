import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayHierarchical = _test_message(
    "ArrayHierarchical",
    typia.message<ArrayHierarchical>(),
);