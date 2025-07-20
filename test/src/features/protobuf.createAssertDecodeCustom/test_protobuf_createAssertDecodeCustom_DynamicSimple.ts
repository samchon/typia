import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createAssertDecodeCustom_DynamicSimple = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )({
    decode: typia.protobuf.createAssertDecode<DynamicSimple>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
  });
