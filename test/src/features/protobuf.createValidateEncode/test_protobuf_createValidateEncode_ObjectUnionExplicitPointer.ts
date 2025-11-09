import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createValidateEncode_ObjectUnionExplicitPointer = (): void => _test_protobuf_validateEncode(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
  encode: typia.protobuf.createValidateEncode<ObjectUnionExplicitPointer>(),
  decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
  message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
});
