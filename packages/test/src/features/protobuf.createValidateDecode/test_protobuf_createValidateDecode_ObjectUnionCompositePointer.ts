import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createValidateDecode_ObjectUnionCompositePointer =
  _test_protobuf_validateDecode(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: typia.protobuf.createValidateDecode<ObjectUnionCompositePointer>(),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
