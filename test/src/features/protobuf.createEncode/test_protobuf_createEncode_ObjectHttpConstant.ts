import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createEncode_ObjectHttpConstant = (): void =>
  _test_protobuf_encode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
    decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    message: typia.protobuf.message<ObjectHttpConstant>(),
  });
