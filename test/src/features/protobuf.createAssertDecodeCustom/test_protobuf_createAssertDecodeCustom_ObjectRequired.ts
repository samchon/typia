import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectRequired =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)({
    decode: typia.protobuf.createAssertDecode<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
  });
