import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectLiteralType = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  decode: (input) => typia.protobuf.assertDecode<ObjectLiteralType>(input),
  encode: typia.protobuf.createEncode<ObjectLiteralType>(),
});
