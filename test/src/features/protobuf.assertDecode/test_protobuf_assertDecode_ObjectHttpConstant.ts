import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_assertDecode_ObjectHttpConstant = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpConstant>(input),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
