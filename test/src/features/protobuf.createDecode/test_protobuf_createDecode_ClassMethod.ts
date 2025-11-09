import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createDecode_ClassMethod = (): void => _test_protobuf_decode(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  decode: typia.protobuf.createDecode<ClassMethod>(),
  encode: typia.protobuf.createEncode<ClassMethod>(),
});
