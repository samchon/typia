import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_message_TemplateAtomic = _test_protobuf_message(
    "TemplateAtomic",
)(
    'syntax = "proto3";\n\nmessage TemplateAtomic {\n    requiredstring prefix = 1;\n    requiredstring postfix = 2;\n    requiredstring middle_string = 3;\n    requiredstring middle_string_empty = 4;\n    requiredstring middle_numeric = 5;\n    requiredstring middle_boolean = 6;\n    requiredstring ipv4 = 7;\n    requiredstring email = 8;\n}',
);
