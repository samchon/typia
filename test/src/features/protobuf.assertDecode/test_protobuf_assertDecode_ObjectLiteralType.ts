import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_assertDecode_ObjectLiteralType =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)({
    decode: (input) => typia.protobuf.assertDecode<ObjectLiteralType>(input),
    encode: typia.protobuf.createEncode<ObjectLiteralType>(),
  });
