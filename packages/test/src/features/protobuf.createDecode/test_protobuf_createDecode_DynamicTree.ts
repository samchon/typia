import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createDecode_DynamicTree = _test_protobuf_decode(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  decode: typia.protobuf.createDecode<DynamicTree>(),
  encode: typia.protobuf.createEncode<DynamicTree>(),
});
