import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectPartial =
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
