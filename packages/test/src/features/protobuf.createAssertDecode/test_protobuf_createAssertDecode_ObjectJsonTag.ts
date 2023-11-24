import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertDecode_ObjectJsonTag =
  _test_protobuf_assertDecode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    decode: typia.protobuf.createAssertDecode<ObjectJsonTag>(),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
  });
