import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createAssertDecode_ObjectPartialAndRequired =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
      decode: typia.protobuf.createAssertDecode<ObjectPartialAndRequired>(),
      encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
    });
