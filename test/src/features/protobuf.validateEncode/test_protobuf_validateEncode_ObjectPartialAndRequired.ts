import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_validateEncode_ObjectPartialAndRequired = (): void =>
  _test_protobuf_validateEncode(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    encode: (input) =>
      typia.protobuf.validateEncode<ObjectPartialAndRequired>(input),
    decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    message: typia.protobuf.message<ObjectPartialAndRequired>(),
  });
