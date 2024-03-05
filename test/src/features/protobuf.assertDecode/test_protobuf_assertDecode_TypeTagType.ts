import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_assertDecode_TypeTagType =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagType>(input),
    encode: typia.protobuf.createEncode<TypeTagType>(),
  });
