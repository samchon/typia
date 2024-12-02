import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_isDecode_ObjectSequenceProtobuf =
  _test_protobuf_isDecode("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectSequenceProtobuf>(input),
    encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
  });
