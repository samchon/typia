import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_encode_ObjectUnionExplicitPointer = (): void =>
  _test_protobuf_encode(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    encode: (input) => typia.protobuf.encode<ObjectUnionExplicitPointer>(input),
    decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
  });
