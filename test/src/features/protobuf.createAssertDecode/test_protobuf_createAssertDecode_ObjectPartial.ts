import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createAssertDecode_ObjectPartial = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectPartial>(),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
