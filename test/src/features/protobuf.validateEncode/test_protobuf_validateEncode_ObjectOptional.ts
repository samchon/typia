import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_validateEncode_ObjectOptional = (): void => _test_protobuf_validateEncode(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  encode: (input) => typia.protobuf.validateEncode<ObjectOptional>(input),
  decode: typia.protobuf.createDecode<ObjectOptional>(),
  message: typia.protobuf.message<ObjectOptional>(),
});
