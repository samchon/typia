import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectHttpUndefindable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectHttpUndefindable>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
  });
