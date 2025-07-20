import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_assertEncodeCustom_ClassMethod = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<ClassMethod>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ClassMethod>(),
    message: typia.protobuf.message<ClassMethod>(),
  });
