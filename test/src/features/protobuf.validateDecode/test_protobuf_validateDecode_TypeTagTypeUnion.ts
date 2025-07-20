import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_validateDecode_TypeTagTypeUnion = (): void =>
  _test_protobuf_validateDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )({
    decode: (input) => typia.protobuf.validateDecode<TypeTagTypeUnion>(input),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  });
