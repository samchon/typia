import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ArraySimple = _test_message(
    "ArraySimple",
    typia.message<ArraySimple>(),
);