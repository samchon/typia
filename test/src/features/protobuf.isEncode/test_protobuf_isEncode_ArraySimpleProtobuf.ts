import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_isEncode_ArraySimpleProtobuf = (): void =>
  _test_protobuf_isEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    encode: (input) => typia.protobuf.isEncode<ArraySimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    message: typia.protobuf.message<ArraySimpleProtobuf>(),
  });
