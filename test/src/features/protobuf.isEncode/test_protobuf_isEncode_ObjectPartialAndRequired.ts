import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_isEncode_ObjectPartialAndRequired = (): void =>
  _test_protobuf_isEncode("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectPartialAndRequired>(input),
    decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    message: typia.protobuf.message<ObjectPartialAndRequired>(),
  });
