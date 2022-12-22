import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicSimple = _test_message(
    "DynamicSimple",
    typia.message<DynamicSimple>(),
);