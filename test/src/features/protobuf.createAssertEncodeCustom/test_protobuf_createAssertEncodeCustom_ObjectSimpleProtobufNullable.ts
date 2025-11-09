import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectSimpleProtobufNullable = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobufNullable>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
  message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
});
