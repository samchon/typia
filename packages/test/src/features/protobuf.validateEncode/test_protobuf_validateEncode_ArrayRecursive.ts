import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createValidateEncode_ArrayRecursive =
  _test_protobuf_validateEncode("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )({
    encode: (input) => typia.protobuf.validateEncode<ArrayRecursive>(input),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
  });
