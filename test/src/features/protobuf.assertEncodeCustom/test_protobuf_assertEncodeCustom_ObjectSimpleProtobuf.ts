import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectSimpleProtobuf = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
  encode: (input) => typia.protobuf.assertEncode<ObjectSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
  message: typia.protobuf.message<ObjectSimpleProtobuf>(),
});
