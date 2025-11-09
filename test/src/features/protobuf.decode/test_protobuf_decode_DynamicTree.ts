import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_decode_DynamicTree = (): void => _test_protobuf_decode(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  decode: (input) => typia.protobuf.decode<DynamicTree>(input),
  encode: typia.protobuf.createEncode<DynamicTree>(),
});
