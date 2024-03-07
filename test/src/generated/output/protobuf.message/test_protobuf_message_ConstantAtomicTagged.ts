import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ConstantAtomicTagged =
  _test_protobuf_message("ConstantAtomicTagged")(
    'syntax = "proto3";\n\nmessage ConstantAtomicTagged {\n  required string id = 1;\n  oneof age {\n    int32 v2 = 2;\n    uint32 v3 = 3;\n  }\n}',
  );
