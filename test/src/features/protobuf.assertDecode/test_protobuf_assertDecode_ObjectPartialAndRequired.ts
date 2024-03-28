import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_assertDecode_ObjectPartialAndRequired =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectPartialAndRequired>(input),
    encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
  });
