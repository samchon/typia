import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_encode_ObjectSimpleProtobuf = (): void =>
  _test_protobuf_encode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    encode: (input) => typia.protobuf.encode<ObjectSimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
  });
