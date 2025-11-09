import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectLiteralType = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  decode: typia.protobuf.createAssertDecode<ObjectLiteralType>(),
  encode: typia.protobuf.createEncode<ObjectLiteralType>(),
});
