import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectRequired =
  _test_protobuf_assertEncode(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectRequired>(),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
    message: typia.protobuf.message<ObjectRequired>(),
  });
