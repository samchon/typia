import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_encode_DynamicTree = (): void => _test_protobuf_encode(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  encode: (input) => typia.protobuf.encode<DynamicTree>(input),
  decode: typia.protobuf.createDecode<DynamicTree>(),
  message: typia.protobuf.message<DynamicTree>(),
});
