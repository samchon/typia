import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_encode_ObjectSequenceProtobuf = (): void => _test_protobuf_encode(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  encode: (input) => typia.protobuf.encode<ObjectSequenceProtobuf>(input),
  decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
  message: typia.protobuf.message<ObjectSequenceProtobuf>(),
});
