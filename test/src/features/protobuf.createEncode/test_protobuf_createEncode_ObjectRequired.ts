import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createEncode_ObjectRequired = (): void =>
  _test_protobuf_encode("ObjectRequired")<ObjectRequired>(ObjectRequired)({
    encode: typia.protobuf.createEncode<ObjectRequired>(),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
    message: typia.protobuf.message<ObjectRequired>(),
  });
