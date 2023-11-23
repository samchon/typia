import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createValidateDecode_TypeTagTypeUnion =
  _test_protobuf_validateDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )({
    decode: typia.protobuf.createValidateDecode<TypeTagTypeUnion>(),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  });
