import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createAssertEncode_ObjectHttpArray =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpArray>(),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
