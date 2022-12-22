import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayMatrix = _test_message(
    "ArrayMatrix",
    typia.message<ArrayMatrix>(),
);