import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_validateEncode_ClassNonPublic = (): void => _test_protobuf_validateEncode(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
  encode: (input) => typia.protobuf.validateEncode<ClassNonPublic>(input),
  decode: typia.protobuf.createDecode<ClassNonPublic>(),
  message: typia.protobuf.message<ClassNonPublic>(),
});
