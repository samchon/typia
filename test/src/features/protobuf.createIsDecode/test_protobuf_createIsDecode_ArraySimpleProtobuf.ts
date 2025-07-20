import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createIsDecode_ArraySimpleProtobuf = (): void =>
  _test_protobuf_isDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    decode: typia.protobuf.createIsDecode<ArraySimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
  });
