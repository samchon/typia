import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_createIsDecode_ObjectSequenceProtobuf = (): void => _test_protobuf_isDecode(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  decode: typia.protobuf.createIsDecode<ObjectSequenceProtobuf>(),
  encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
});
