import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createValidateDecode_ArraySimpleProtobuf = (): void => _test_protobuf_validateDecode(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
  decode: typia.protobuf.createValidateDecode<ArraySimpleProtobuf>(),
  encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
});
