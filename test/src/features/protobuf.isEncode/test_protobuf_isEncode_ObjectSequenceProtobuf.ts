import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_isEncode_ObjectSequenceProtobuf = (): void =>
  _test_protobuf_isEncode("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectSequenceProtobuf>(input),
    decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
    message: typia.protobuf.message<ObjectSequenceProtobuf>(),
  });
