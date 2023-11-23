import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createIsEncode_ObjectHttpConstant =
  _test_protobuf_isEncode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectHttpConstant>(input),
    decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    message: typia.protobuf.message<ObjectHttpConstant>(),
  });
