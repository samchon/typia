import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createDecode_ObjectHttpTypeTag = (): void =>
  _test_protobuf_decode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
  });
