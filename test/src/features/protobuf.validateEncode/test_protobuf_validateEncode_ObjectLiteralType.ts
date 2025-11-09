import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_validateEncode_ObjectLiteralType = (): void => _test_protobuf_validateEncode(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  encode: (input) => typia.protobuf.validateEncode<ObjectLiteralType>(input),
  decode: typia.protobuf.createDecode<ObjectLiteralType>(),
  message: typia.protobuf.message<ObjectLiteralType>(),
});
