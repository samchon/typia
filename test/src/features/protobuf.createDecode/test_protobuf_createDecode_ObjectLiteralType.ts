import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createDecode_ObjectLiteralType = (): void =>
  _test_protobuf_decode("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )({
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    encode: typia.protobuf.createEncode<ObjectLiteralType>(),
  });
