import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_message_ArrayMatrix = _test_message(
    "ArrayMatrix",
    typia.message<ArrayMatrix>(),
);
