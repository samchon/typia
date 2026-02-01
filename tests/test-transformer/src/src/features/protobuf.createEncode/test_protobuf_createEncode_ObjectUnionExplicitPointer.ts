import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createEncode_ObjectUnionExplicitPointer = (): void => _test_protobuf_encode(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
  encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
  decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
  message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
});
