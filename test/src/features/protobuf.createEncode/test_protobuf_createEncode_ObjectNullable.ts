import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createEncode_ObjectNullable = (): void =>
  _test_protobuf_encode("ObjectNullable")<ObjectNullable>(ObjectNullable)({
    encode: typia.protobuf.createEncode<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
