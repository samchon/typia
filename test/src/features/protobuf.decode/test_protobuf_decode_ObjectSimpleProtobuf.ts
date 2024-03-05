import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_decode_ObjectSimpleProtobuf = _test_protobuf_decode(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
  decode: (input) => typia.protobuf.decode<ObjectSimpleProtobuf>(input),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
});
