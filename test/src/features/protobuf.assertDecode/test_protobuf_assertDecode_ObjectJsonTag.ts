import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_assertDecode_ObjectJsonTag =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectJsonTag>(input),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
  });
