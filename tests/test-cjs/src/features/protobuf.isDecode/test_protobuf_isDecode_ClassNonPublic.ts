import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_isDecode_ClassNonPublic = (): void =>
  _test_protobuf_isDecode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)({
    decode: (input) => typia.protobuf.isDecode<ClassNonPublic>(input),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
