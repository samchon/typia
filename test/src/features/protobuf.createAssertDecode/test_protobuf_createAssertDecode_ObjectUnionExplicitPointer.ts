import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertDecode_ObjectUnionExplicitPointer =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    decode: typia.protobuf.createAssertDecode<ObjectUnionExplicitPointer>(),
    encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
  });
