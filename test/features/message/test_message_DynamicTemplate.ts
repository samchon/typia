import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    typia.message<DynamicTemplate>(),
);