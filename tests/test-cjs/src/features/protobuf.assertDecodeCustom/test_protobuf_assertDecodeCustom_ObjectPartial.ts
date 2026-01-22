import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_assertDecodeCustom_ObjectPartial = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectPartial>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
