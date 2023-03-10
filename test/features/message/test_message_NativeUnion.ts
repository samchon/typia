import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_message_NativeUnion = _test_message(
    "NativeUnion",
    typia.message<NativeUnion>(),
);
