import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectOptional =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectOptional",
  )<ObjectOptional>(ObjectOptional)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectOptional>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
