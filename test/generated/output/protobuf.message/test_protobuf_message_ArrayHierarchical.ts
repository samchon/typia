import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_protobuf_message_ArrayHierarchical = _test_protobuf_message(
    "ArrayHierarchical",
    'syntax = "proto3";\n\nmessage ArrayHierarchical {\n    message ICompany {\n        double id = 1;\n        double serial = 2;\n        string name = 3;\n        ArrayHierarchical.ITimestamp established_at = 4;\n        repeated ArrayHierarchical.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        double time = 1;\n        double zone = 2;\n    }\n\n    message IDepartment {\n        double id = 1;\n        string code = 2;\n        double sales = 3;\n        ArrayHierarchical.ITimestamp created_at = 4;\n        repeated ArrayHierarchical.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        double id = 1;\n        string name = 2;\n        double age = 3;\n        double grade = 4;\n        ArrayHierarchical.ITimestamp employeed_at = 5;\n    }\n}\n\nmessage __Main {\n    repeated ArrayHierarchical.ICompany value = 1;\n}',
);
