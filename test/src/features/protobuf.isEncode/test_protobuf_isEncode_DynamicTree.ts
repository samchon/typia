import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_isEncode_DynamicTree = _test_protobuf_isEncode(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  encode: (input) => typia.protobuf.isEncode<DynamicTree>(input),
  decode: typia.protobuf.createDecode<DynamicTree>(),
  message: typia.protobuf.message<DynamicTree>(),
});
