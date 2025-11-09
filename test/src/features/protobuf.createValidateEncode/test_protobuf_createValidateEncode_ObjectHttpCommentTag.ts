import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createValidateEncode_ObjectHttpCommentTag = (): void => _test_protobuf_validateEncode(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  encode: typia.protobuf.createValidateEncode<ObjectHttpCommentTag>(),
  decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
  message: typia.protobuf.message<ObjectHttpCommentTag>(),
});
