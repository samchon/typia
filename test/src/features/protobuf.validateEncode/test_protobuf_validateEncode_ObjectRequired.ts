import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_validateEncode_ObjectRequired =
  _test_protobuf_validateEncode("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )({
    encode: (input) => typia.protobuf.validateEncode<ObjectRequired>(input),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
    message: typia.protobuf.message<ObjectRequired>(),
  });
