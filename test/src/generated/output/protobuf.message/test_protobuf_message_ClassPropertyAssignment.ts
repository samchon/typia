import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ClassPropertyAssignment =
  _test_protobuf_message("ClassPropertyAssignment")(
    'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n  required double id = 1;\n  required string name = 2;\n  required string note = 3;\n  required bool editable = 4;\n  required bool incremental = 5;\n}',
  );
