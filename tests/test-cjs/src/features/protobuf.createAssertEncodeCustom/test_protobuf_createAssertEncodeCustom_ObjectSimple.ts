import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createAssertEncodeCustom_ObjectSimple = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectSimple>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
