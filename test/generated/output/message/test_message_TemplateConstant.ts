import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_message_TemplateConstant = _test_message(
    "TemplateConstant",
    'syntax = "proto3";\n\nmessage TemplateConstant {\n    message Type {\n        string prefix = 1;\n        string postfix = 2;\n        string combined = 3;\n    }\n}\n\nmessage __Main {\n    repeated TemplateConstant.Type value = 1;\n}',
);
