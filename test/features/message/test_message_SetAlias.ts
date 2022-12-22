import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_SetAlias = _test_message(
    "SetAlias",
    typia.message<SetAlias>(),
);