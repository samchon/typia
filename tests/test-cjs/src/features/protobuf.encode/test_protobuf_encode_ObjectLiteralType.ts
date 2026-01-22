import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_encode_ObjectLiteralType = (): void =>
  _test_protobuf_encode("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )({
    encode: (input) => typia.protobuf.encode<ObjectLiteralType>(input),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    message: typia.protobuf.message<ObjectLiteralType>(),
  });
