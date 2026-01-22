import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertDecode_ObjectJsonTag = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectJsonTag>(),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
  });
