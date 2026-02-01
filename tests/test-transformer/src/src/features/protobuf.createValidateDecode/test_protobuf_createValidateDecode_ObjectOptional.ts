import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createValidateDecode_ObjectOptional = (): void => _test_protobuf_validateDecode(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  decode: typia.protobuf.createValidateDecode<ObjectOptional>(),
  encode: typia.protobuf.createEncode<ObjectOptional>(),
});
