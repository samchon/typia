import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createValidateDecode_ObjectHttpConstant = (): void => _test_protobuf_validateDecode(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
  decode: typia.protobuf.createValidateDecode<ObjectHttpConstant>(),
  encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
});
