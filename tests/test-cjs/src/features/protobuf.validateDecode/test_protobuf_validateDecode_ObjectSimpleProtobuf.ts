import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_validateDecode_ObjectSimpleProtobuf = (): void =>
  _test_protobuf_validateDecode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    decode: (input) =>
      typia.protobuf.validateDecode<ObjectSimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
