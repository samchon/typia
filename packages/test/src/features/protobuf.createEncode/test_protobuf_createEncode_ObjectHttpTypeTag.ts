import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createEncode_ObjectHttpTypeTag =
  _test_protobuf_encode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
  });
