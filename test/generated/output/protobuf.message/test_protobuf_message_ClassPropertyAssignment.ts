import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_message_ClassPropertyAssignment =
    _test_protobuf_message("ClassPropertyAssignment")(
        'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    requireddouble id = 1;\n    requiredstring name = 2;\n    requiredstring note = 3;\n    requiredbool editable = 4;\n    requiredbool incremental = 5;\n}',
    );
