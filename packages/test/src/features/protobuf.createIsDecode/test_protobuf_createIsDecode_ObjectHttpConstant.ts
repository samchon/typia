import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createIsDecode_ObjectHttpConstant =
  _test_protobuf_isDecode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    decode: typia.protobuf.createIsDecode<ObjectHttpConstant>(),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
