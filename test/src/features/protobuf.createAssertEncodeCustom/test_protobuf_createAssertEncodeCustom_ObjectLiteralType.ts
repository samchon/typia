import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectLiteralType = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  encode: typia.protobuf.createAssertEncode<ObjectLiteralType>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectLiteralType>(),
  message: typia.protobuf.message<ObjectLiteralType>(),
});
