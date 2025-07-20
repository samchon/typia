import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createValidateDecode_ObjectPartialAndRequired =
  (): void =>
    _test_protobuf_validateDecode(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
      decode: typia.protobuf.createValidateDecode<ObjectPartialAndRequired>(),
      encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
    });
