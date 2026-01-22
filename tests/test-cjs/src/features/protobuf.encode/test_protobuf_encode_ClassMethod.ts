import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_encode_ClassMethod = (): void =>
  _test_protobuf_encode("ClassMethod")<ClassMethod>(ClassMethod)({
    encode: (input) => typia.protobuf.encode<ClassMethod>(input),
    decode: typia.protobuf.createDecode<ClassMethod>(),
    message: typia.protobuf.message<ClassMethod>(),
  });
