import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectHttpConstant =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectHttpConstant>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
