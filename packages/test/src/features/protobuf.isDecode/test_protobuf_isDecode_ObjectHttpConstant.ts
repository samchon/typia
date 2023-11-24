import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createIsDecode_ObjectHttpConstant =
  _test_protobuf_isDecode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectHttpConstant>(input),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
  });
