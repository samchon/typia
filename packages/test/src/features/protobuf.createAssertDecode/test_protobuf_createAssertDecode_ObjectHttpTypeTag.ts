import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createAssertDecode_ObjectHttpTypeTag =
  _test_protobuf_assertDecode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectHttpTypeTag>(),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
  });
