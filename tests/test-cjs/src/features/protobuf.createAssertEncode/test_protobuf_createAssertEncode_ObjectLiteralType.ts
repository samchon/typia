import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createAssertEncode_ObjectLiteralType = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)({
    encode: typia.protobuf.createAssertEncode<ObjectLiteralType>(),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    message: typia.protobuf.message<ObjectLiteralType>(),
  });
