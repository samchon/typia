import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectSimple =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectSimple>(),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
