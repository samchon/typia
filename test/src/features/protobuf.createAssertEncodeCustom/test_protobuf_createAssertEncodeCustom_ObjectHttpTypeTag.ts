import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpTypeTag =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpTypeTag>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
  });
