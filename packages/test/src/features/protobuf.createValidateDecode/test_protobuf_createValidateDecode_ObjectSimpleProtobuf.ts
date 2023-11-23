import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createValidateDecode_ObjectSimpleProtobuf =
  _test_protobuf_validateDecode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
