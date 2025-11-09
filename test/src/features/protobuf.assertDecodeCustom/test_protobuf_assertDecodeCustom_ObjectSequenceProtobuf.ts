import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectSequenceProtobuf = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  decode: (input) => typia.protobuf.assertDecode<ObjectSequenceProtobuf>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectSequenceProtobuf>(),
});
