import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createIsEncode_DynamicTree = (): void => _test_protobuf_isEncode(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  encode: typia.protobuf.createIsEncode<DynamicTree>(),
  decode: typia.protobuf.createDecode<DynamicTree>(),
  message: typia.protobuf.message<DynamicTree>(),
});
