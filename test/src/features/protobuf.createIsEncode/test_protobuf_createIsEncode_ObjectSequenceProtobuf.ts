import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_createIsEncode_ObjectSequenceProtobuf = (): void =>
  _test_protobuf_isEncode("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )({
    encode: typia.protobuf.createIsEncode<ObjectSequenceProtobuf>(),
    decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
    message: typia.protobuf.message<ObjectSequenceProtobuf>(),
  });
