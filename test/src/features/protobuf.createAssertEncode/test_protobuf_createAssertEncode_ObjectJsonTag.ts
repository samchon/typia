import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertEncode_ObjectJsonTag =
  _test_protobuf_assertEncode(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectJsonTag>(),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
  });
