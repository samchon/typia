import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectHttpNullable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectHttpNullable>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
  });
