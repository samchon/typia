import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_message_ArrayHierarchical = _test_message(
    "ArrayHierarchical",
    typia.message<ArrayHierarchical>(),
);
