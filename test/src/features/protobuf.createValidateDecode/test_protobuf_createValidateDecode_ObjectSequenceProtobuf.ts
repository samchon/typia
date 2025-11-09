import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_createValidateDecode_ObjectSequenceProtobuf = (): void => _test_protobuf_validateDecode(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  decode: typia.protobuf.createValidateDecode<ObjectSequenceProtobuf>(),
  encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
});
