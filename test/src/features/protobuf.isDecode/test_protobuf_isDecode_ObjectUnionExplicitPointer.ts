import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_isDecode_ObjectUnionExplicitPointer = (): void =>
  _test_protobuf_isDecode(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    decode: (input) =>
      typia.protobuf.isDecode<ObjectUnionExplicitPointer>(input),
    encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
  });
