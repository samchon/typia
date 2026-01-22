import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createAssertDecodeCustom_ClassMethod = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )({
    decode: typia.protobuf.createAssertDecode<ClassMethod>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ClassMethod>(),
  });
