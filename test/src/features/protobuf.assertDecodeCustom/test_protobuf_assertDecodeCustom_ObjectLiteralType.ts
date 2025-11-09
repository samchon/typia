import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectLiteralType = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  decode: (input) => typia.protobuf.assertDecode<ObjectLiteralType>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectLiteralType>(),
});
