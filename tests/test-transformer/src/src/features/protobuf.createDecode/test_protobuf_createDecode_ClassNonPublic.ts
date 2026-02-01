import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createDecode_ClassNonPublic = (): void => _test_protobuf_decode(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
  decode: typia.protobuf.createDecode<ClassNonPublic>(),
  encode: typia.protobuf.createEncode<ClassNonPublic>(),
});
