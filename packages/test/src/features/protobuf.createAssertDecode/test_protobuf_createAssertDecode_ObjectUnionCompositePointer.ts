import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createAssertDecode_ObjectUnionCompositePointer =
  _test_protobuf_assertDecode(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: typia.protobuf.createAssertDecode<ObjectUnionCompositePointer>(),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
