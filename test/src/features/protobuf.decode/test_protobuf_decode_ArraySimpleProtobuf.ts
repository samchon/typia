import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_decode_ArraySimpleProtobuf = _test_protobuf_decode(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
  decode: (input) => typia.protobuf.decode<ArraySimpleProtobuf>(input),
  encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
});
