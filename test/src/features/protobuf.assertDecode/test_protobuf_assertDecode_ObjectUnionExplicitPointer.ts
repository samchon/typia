import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertDecode_ObjectUnionExplicitPointer =
  _test_protobuf_assertDecode(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectUnionExplicitPointer>(input),
    encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
  });
