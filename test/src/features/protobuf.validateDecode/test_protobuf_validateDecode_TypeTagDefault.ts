import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_validateDecode_TypeTagDefault =
  _test_protobuf_validateDecode("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )({
    decode: (input) => typia.protobuf.validateDecode<TypeTagDefault>(input),
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
  });
