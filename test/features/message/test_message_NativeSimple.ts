import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_message_NativeSimple = _test_message(
    "NativeSimple",
    typia.message<NativeSimple>(),
);
