import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createAssertDecode_ObjectOptional = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectOptional>(),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
