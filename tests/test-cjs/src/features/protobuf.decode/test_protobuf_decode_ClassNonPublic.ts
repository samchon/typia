import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_decode_ClassNonPublic = (): void =>
  _test_protobuf_decode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)({
    decode: (input) => typia.protobuf.decode<ClassNonPublic>(input),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
