import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateConstant = _test_message(
    "TemplateConstant",
    typia.message<TemplateConstant>(),
    `syntax = \"proto3\";

message TemplateConstant {
    message Type {
        string prefix = 1;
        string postfix = 2;
        string combined = 3;
    }
}

message __Main {
    repeated TemplateConstant.Type value = 1;
}`
);