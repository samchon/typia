import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_message_NativeAlias = _test_message(
    "NativeAlias",
    typia.message<NativeAlias>(),
);
