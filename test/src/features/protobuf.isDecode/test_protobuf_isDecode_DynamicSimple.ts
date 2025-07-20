import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_isDecode_DynamicSimple = (): void =>
  _test_protobuf_isDecode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    decode: (input) => typia.protobuf.isDecode<DynamicSimple>(input),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
  });
