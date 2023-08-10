import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_protobuf_message_ArrayHierarchicalPointer =
    _test_protobuf_message("ArrayHierarchicalPointer")(
        'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n    repeated ArrayHierarchicalPointer.ICompany value = 1;\n    message ICompany {\n        requireddouble id = 1;\n        requireddouble serial = 2;\n        requiredstring name = 3;\n        requiredArrayHierarchicalPointer.ITimestamp established_at = 4;\n        repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        requireddouble time = 1;\n        requireddouble zone = 2;\n    }\n\n    message IDepartment {\n        requireddouble id = 1;\n        requiredstring code = 2;\n        requireddouble sales = 3;\n        requiredArrayHierarchicalPointer.ITimestamp created_at = 4;\n        repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        requireddouble id = 1;\n        requiredstring name = 2;\n        requireddouble age = 3;\n        requireddouble grade = 4;\n        requiredArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n    }\n}',
    );
