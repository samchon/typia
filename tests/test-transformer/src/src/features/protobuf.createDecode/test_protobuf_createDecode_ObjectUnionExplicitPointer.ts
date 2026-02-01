import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createDecode_ObjectUnionExplicitPointer = (): void => _test_protobuf_decode(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
  decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
  encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
});
