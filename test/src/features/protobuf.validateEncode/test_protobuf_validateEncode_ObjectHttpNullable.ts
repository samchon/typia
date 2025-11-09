import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_validateEncode_ObjectHttpNullable = (): void => _test_protobuf_validateEncode(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  encode: (input) => typia.protobuf.validateEncode<ObjectHttpNullable>(input),
  decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
  message: typia.protobuf.message<ObjectHttpNullable>(),
});
