import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createIsDecode_ObjectOptional =
  _test_protobuf_isDecode("ObjectOptional")<ObjectOptional>(ObjectOptional)({
    decode: (input) => typia.protobuf.isDecode<ObjectOptional>(input),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
