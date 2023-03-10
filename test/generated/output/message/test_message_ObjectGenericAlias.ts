import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_message_ObjectGenericAlias = _test_message(
    "ObjectGenericAlias",
    'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n    message Alias {\n        string value = 1;\n    }\n}',
);
