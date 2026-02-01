import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createIsEncode_ObjectOptional = (): void => _test_protobuf_isEncode(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  encode: typia.protobuf.createIsEncode<ObjectOptional>(),
  decode: typia.protobuf.createDecode<ObjectOptional>(),
  message: typia.protobuf.message<ObjectOptional>(),
});
