import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_assertDecodeCustom_DynamicSimple =
  _test_protobuf_assertDecode(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<DynamicSimple>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
  });
