import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createAssertDecode_ObjectSimple =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectSimple>(),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
