import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagTypeUnion =
  _test_protobuf_assertDecode(TypeGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)({
    decode: typia.protobuf.createAssertDecode<TypeTagTypeUnion>(),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  });
