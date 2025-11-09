import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_isEncode_ObjectHttpTypeTag = (): void =>
  _test_protobuf_isEncode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectHttpTypeTag>(input),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
  });
