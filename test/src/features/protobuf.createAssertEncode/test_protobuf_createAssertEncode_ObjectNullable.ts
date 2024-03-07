import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectNullable =
  _test_protobuf_assertEncode(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
