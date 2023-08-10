import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_protobuf_message_ArrayHierarchicalPointer =
    _test_protobuf_message("ArrayHierarchicalPointer")(
        'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n    repeated ArrayHierarchicalPointer.ICompany value = 1;\n    message ICompany {\n        double id = 1;\n        double serial = 2;\n        string name = 3;\n        ArrayHierarchicalPointer.ITimestamp established_at = 4;\n        repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        double time = 1;\n        double zone = 2;\n    }\n\n    message IDepartment {\n        double id = 1;\n        string code = 2;\n        double sales = 3;\n        ArrayHierarchicalPointer.ITimestamp created_at = 4;\n        repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        double id = 1;\n        string name = 2;\n        double age = 3;\n        double grade = 4;\n        ArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n    }\n}',
    );
