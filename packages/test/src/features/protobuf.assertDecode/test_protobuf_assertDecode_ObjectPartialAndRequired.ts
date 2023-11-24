import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createAssertDecode_ObjectPartialAndRequired =
  _test_protobuf_assertDecode(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectPartialAndRequired>(input),
    encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
  });
