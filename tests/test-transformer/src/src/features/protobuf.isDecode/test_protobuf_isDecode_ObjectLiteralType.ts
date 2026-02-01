import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_isDecode_ObjectLiteralType = (): void => _test_protobuf_isDecode(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  decode: (input) => typia.protobuf.isDecode<ObjectLiteralType>(input),
  encode: typia.protobuf.createEncode<ObjectLiteralType>(),
});
