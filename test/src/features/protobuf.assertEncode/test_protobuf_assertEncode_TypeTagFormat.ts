import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_assertEncode_TypeTagFormat = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )({
    encode: (input) => typia.protobuf.assertEncode<TypeTagFormat>(input),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
  });
