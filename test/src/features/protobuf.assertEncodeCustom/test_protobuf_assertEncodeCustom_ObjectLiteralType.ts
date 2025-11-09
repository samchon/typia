import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectLiteralType = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  encode: (input) => typia.protobuf.assertEncode<ObjectLiteralType>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectLiteralType>(),
  message: typia.protobuf.message<ObjectLiteralType>(),
});
