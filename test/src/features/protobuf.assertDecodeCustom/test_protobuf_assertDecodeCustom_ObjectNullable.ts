import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_assertDecodeCustom_ObjectNullable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectNullable",
  )<ObjectNullable>(ObjectNullable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectNullable>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
