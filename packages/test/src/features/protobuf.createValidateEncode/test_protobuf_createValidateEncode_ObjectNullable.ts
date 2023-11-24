import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createValidateEncode_ObjectNullable =
  _test_protobuf_validateEncode("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
