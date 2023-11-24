import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createDecode_ObjectUnionCompositePointer =
  _test_protobuf_decode(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
