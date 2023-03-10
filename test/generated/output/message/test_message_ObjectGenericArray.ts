import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_message_ObjectGenericArray = _test_message(
    "ObjectGenericArray",
    'syntax = "proto3";\n\nmessage ObjectGenericArray {\n    ObjectGenericArray.IPagination pagination = 1;\n    repeated ObjectGenericArray.IPerson data = 2;\n\n\n    message IPagination {\n        double page = 1;\n        double limit = 2;\n        double total_count = 3;\n        double total_pages = 4;\n    }\n\n    message IPerson {\n        string name = 1;\n        double age = 2;\n    }\n}',
);
