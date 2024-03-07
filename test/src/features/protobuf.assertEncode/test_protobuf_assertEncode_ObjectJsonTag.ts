import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectJsonTag =
  _test_protobuf_assertEncode(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectJsonTag>(input),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
  });
