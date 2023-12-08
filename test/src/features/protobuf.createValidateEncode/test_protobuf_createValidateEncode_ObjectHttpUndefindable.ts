import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createValidateEncode_ObjectHttpUndefindable =
  _test_protobuf_validateEncode(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    encode: typia.protobuf.createValidateEncode<ObjectHttpUndefindable>(),
    decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    message: typia.protobuf.message<ObjectHttpUndefindable>(),
  });
