import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_isDecode_ObjectSimpleProtobuf = (): void => _test_protobuf_isDecode(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
  decode: (input) => typia.protobuf.isDecode<ObjectSimpleProtobuf>(input),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
});
