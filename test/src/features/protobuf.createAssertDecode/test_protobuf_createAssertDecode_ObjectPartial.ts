import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectPartial =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectPartial>(),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
