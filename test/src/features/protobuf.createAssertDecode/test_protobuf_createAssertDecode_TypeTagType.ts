import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createAssertDecode_TypeTagType =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagType>(),
    encode: typia.protobuf.createEncode<TypeTagType>(),
  });
