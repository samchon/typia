import typia from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_NativeAlias = _test_message(
    "NativeAlias",
    typia.message<NativeAlias>(),
);