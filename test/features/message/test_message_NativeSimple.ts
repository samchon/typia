import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_NativeSimple = _test_message(
    "NativeSimple",
    typia.message<NativeSimple>(),
);