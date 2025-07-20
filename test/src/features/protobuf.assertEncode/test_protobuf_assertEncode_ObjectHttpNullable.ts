import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_assertEncode_ObjectHttpNullable = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)({
    encode: (input) => typia.protobuf.assertEncode<ObjectHttpNullable>(input),
    decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
    message: typia.protobuf.message<ObjectHttpNullable>(),
  });
