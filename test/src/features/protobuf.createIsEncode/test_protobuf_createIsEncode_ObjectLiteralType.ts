import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createIsEncode_ObjectLiteralType = (): void =>
  _test_protobuf_isEncode("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )({
    encode: typia.protobuf.createIsEncode<ObjectLiteralType>(),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    message: typia.protobuf.message<ObjectLiteralType>(),
  });
