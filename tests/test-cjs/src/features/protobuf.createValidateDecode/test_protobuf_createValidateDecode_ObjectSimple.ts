import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createValidateDecode_ObjectSimple = (): void =>
  _test_protobuf_validateDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: typia.protobuf.createValidateDecode<ObjectSimple>(),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
