import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { SetAlias } from "../../structures/SetAlias";

export const test_message_SetAlias = _test_message(
    "SetAlias",
    typia.message<SetAlias>(),
);
