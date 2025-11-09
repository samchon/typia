import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_createValidateEncode_ObjectHttpNullable = (): void => _test_protobuf_validateEncode(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  encode: typia.protobuf.createValidateEncode<ObjectHttpNullable>(),
  decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
  message: typia.protobuf.message<ObjectHttpNullable>(),
});
