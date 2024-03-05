import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_validateEncode_DynamicTree =
  _test_protobuf_validateEncode("DynamicTree")<DynamicTree>(DynamicTree)({
    encode: (input) => typia.protobuf.validateEncode<DynamicTree>(input),
    decode: typia.protobuf.createDecode<DynamicTree>(),
    message: typia.protobuf.message<DynamicTree>(),
  });
