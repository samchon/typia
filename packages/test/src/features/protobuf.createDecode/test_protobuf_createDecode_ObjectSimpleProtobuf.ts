import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createDecode_ObjectSimpleProtobuf =
  _test_protobuf_decode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
