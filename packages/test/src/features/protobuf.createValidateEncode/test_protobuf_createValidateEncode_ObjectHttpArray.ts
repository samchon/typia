import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createValidateEncode_ObjectHttpArray =
  _test_protobuf_validateEncode("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectHttpArray>(),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
