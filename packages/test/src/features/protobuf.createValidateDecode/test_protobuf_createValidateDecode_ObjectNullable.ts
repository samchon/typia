import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createValidateDecode_ObjectNullable =
  _test_protobuf_validateDecode("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectNullable>(),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
