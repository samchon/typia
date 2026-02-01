import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_createValidateEncode_ObjectSequenceProtobuf = (): void => _test_protobuf_validateEncode(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  encode: typia.protobuf.createValidateEncode<ObjectSequenceProtobuf>(),
  decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
  message: typia.protobuf.message<ObjectSequenceProtobuf>(),
});
