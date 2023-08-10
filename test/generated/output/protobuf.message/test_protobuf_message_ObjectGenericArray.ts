import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_protobuf_message_ObjectGenericArray = _test_protobuf_message(
    "ObjectGenericArray",
)(
    'syntax = "proto3";\n\nmessage ObjectGenericArray {\n    requiredObjectGenericArray.IPagination pagination = 1;\n    repeated ObjectGenericArray.IPerson data = 2;\n    message IPagination {\n        requireddouble page = 1;\n        requireddouble limit = 2;\n        requireddouble total_count = 3;\n        requireddouble total_pages = 4;\n    }\n\n    message IPerson {\n        requiredstring name = 1;\n        requireddouble age = 2;\n    }\n}',
);
