import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_protobuf_message_CommentTagAtomicUnion =
  _test_protobuf_message("CommentTagAtomicUnion")(
    'syntax = "proto3";\n\nmessage CommentTagAtomicUnion {\n    repeated CommentTagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
  );
