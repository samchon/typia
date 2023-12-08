import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createIsEncode_ArrayRecursive =
  _test_protobuf_isEncode("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)({
    encode: (input) => typia.protobuf.isEncode<ArrayRecursive>(input),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
  });
