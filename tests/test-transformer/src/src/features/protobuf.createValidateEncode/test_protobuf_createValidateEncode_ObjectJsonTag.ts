import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createValidateEncode_ObjectJsonTag = (): void => _test_protobuf_validateEncode(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
  encode: typia.protobuf.createValidateEncode<ObjectJsonTag>(),
  decode: typia.protobuf.createDecode<ObjectJsonTag>(),
  message: typia.protobuf.message<ObjectJsonTag>(),
});
