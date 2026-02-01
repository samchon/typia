import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createEncode_ObjectUnionCompositePointer = (): void => _test_protobuf_encode(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
  encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
  message: typia.protobuf.message<ObjectUnionCompositePointer>(),
});
