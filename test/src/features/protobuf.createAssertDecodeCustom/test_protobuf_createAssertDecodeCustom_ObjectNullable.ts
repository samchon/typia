import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createAssertDecodeCustom_ObjectNullable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectNullable",
  )<ObjectNullable>(ObjectNullable)({
    decode: typia.protobuf.createAssertDecode<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
  });
