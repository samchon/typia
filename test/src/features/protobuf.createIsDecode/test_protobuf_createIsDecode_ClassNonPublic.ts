import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createIsDecode_ClassNonPublic = (): void =>
  _test_protobuf_isDecode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)({
    decode: typia.protobuf.createIsDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
