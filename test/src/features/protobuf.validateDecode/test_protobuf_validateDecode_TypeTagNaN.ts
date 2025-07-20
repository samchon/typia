import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_validateDecode_TypeTagNaN = (): void =>
  _test_protobuf_validateDecode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
    decode: (input) => typia.protobuf.validateDecode<TypeTagNaN>(input),
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
  });
