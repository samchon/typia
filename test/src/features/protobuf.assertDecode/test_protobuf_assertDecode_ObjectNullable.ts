import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_assertDecode_ObjectNullable =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectNullable>(input),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
