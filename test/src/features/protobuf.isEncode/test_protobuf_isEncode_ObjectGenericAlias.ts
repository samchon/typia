import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_isEncode_ObjectGenericAlias =
  _test_protobuf_isEncode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectGenericAlias>(input),
    decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    message: typia.protobuf.message<ObjectGenericAlias>(),
  });
