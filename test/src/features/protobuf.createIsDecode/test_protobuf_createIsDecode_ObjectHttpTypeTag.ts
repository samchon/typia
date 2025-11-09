import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createIsDecode_ObjectHttpTypeTag = (): void => _test_protobuf_isDecode(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
  decode: typia.protobuf.createIsDecode<ObjectHttpTypeTag>(),
  encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
});
