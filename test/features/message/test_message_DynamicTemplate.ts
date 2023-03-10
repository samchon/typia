import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    typia.message<DynamicTemplate>(),
);
