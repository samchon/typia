import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectHttpConstant =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpConstant>(input),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
