import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createIsEncode_ObjectNullable =
  _test_protobuf_isEncode("ObjectNullable")<ObjectNullable>(ObjectNullable)({
    encode: typia.protobuf.createIsEncode<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
