import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createAssertDecodeCustom_ObjectLiteralType =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)({
    decode: typia.protobuf.createAssertDecode<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectLiteralType>(),
  });
