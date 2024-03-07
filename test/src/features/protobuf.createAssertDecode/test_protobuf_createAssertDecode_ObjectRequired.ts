import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectRequired =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectRequired>(),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
  });
