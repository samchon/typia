import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createValidateDecode_DynamicSimple =
  _test_protobuf_validateDecode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    decode: (input) => typia.protobuf.validateDecode<DynamicSimple>(input),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
  });
