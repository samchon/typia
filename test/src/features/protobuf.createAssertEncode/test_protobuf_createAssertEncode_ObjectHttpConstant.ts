import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createAssertEncode_ObjectHttpConstant = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpConstant>(),
    decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    message: typia.protobuf.message<ObjectHttpConstant>(),
  });
