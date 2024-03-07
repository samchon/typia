import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ConstantAtomicAbsorbed =
  _test_protobuf_message("ConstantAtomicAbsorbed")(
    'syntax = "proto3";\n\nmessage ConstantAtomicAbsorbed {\n  required string id = 1;\n  required double age = 2;\n}',
  );
