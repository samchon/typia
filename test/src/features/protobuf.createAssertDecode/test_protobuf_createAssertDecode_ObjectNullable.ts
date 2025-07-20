import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createAssertDecode_ObjectNullable = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectNullable>(),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
