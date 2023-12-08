import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createValidateEncode_ObjectHttpArray =
  _test_protobuf_validateEncode("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )({
    encode: (input) => typia.protobuf.validateEncode<ObjectHttpArray>(input),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
