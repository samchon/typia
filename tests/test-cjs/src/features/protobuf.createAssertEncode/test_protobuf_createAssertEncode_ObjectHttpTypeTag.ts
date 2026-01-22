import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createAssertEncode_ObjectHttpTypeTag = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpTypeTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
  });
