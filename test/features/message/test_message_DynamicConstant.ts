import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_message_DynamicConstant = _test_message(
    "DynamicConstant",
    typia.message<DynamicConstant>(),
);
