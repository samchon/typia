import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createAssertDecode_ObjectUnionCompositePointer =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: typia.protobuf.createAssertDecode<ObjectUnionCompositePointer>(),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
