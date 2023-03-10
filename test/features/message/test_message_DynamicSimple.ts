import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_message_DynamicSimple = _test_message(
    "DynamicSimple",
    typia.message<DynamicSimple>(),
);
