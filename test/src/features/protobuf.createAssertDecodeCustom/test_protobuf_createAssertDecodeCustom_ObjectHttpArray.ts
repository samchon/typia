import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpArray =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)({
    decode: typia.protobuf.createAssertDecode<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectHttpArray>(),
  });
