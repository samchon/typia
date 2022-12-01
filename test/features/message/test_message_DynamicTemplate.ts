import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    TSON.message<DynamicTemplate>(),
    `syntax = \"proto3\";

message DynamicTemplate {
}`,
);
