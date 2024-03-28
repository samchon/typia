import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_assertDecode_ObjectHttpNullable =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpNullable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
  });
