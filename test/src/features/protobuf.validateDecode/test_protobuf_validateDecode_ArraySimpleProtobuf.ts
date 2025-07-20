import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_validateDecode_ArraySimpleProtobuf = (): void =>
  _test_protobuf_validateDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    decode: (input) =>
      typia.protobuf.validateDecode<ArraySimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
  });
