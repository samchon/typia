import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_isDecode_ClassMethod = _test_protobuf_isDecode(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  decode: (input) => typia.protobuf.isDecode<ClassMethod>(input),
  encode: typia.protobuf.createEncode<ClassMethod>(),
});
