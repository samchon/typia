import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_validateDecode_TypeTagRange = (): void =>
  _test_protobuf_validateDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
    decode: (input) => typia.protobuf.validateDecode<TypeTagRange>(input),
    encode: typia.protobuf.createEncode<TypeTagRange>(),
  });
