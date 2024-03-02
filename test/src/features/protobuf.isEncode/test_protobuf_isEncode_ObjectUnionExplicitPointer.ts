import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_isEncode_ObjectUnionExplicitPointer =
  _test_protobuf_isEncode(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    encode: (input) =>
      typia.protobuf.isEncode<ObjectUnionExplicitPointer>(input),
    decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
  });
