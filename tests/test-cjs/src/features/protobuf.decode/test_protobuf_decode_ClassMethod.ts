import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_decode_ClassMethod = (): void =>
  _test_protobuf_decode("ClassMethod")<ClassMethod>(ClassMethod)({
    decode: (input) => typia.protobuf.decode<ClassMethod>(input),
    encode: typia.protobuf.createEncode<ClassMethod>(),
  });
