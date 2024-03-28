import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createAssertEncodeCustom_ClassMethod =
  _test_protobuf_assertEncode(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )({
    encode: typia.protobuf.createAssertEncode<ClassMethod>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ClassMethod>(),
    message: typia.protobuf.message<ClassMethod>(),
  });
