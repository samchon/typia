import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectOptional =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectOptional>(),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
