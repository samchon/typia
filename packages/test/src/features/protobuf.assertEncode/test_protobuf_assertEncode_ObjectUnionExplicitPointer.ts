import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertEncode_ObjectUnionExplicitPointer =
  _test_protobuf_assertEncode(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectUnionExplicitPointer>(input),
    decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
  });
