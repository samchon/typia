import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_decode_ObjectSequenceProtobuf =
  _test_protobuf_decode("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )({
    decode: (input) => typia.protobuf.decode<ObjectSequenceProtobuf>(input),
    encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
  });
