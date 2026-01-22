import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_validateDecode_DynamicTree = (): void =>
  _test_protobuf_validateDecode("DynamicTree")<DynamicTree>(DynamicTree)({
    decode: (input) => typia.protobuf.validateDecode<DynamicTree>(input),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
