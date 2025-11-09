import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectSequenceProtobuf = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  decode: (input) => typia.protobuf.assertDecode<ObjectSequenceProtobuf>(input),
  encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
});
