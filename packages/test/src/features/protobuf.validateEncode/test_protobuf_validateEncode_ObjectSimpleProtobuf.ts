import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createValidateEncode_ObjectSimpleProtobuf =
  _test_protobuf_validateEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    encode: (input) =>
      typia.protobuf.validateEncode<ObjectSimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
  });
