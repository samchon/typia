import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_protobuf_message_ArrayHierarchicalPointer =
    _test_protobuf_message("ArrayHierarchicalPointer")(
        'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n    repeated ArrayHierarchicalPointer.ICompany value = 1;\n    message ICompany {\n        required double id = 1;\n        required double serial = 2;\n        required string name = 3;\n        required ArrayHierarchicalPointer.ITimestamp established_at = 4;\n        repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n\n    message IDepartment {\n        required double id = 1;\n        required string code = 2;\n        required double sales = 3;\n        required ArrayHierarchicalPointer.ITimestamp created_at = 4;\n        repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        required double id = 1;\n        required string name = 2;\n        required double age = 3;\n        required double grade = 4;\n        required ArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n    }\n}',
    );
