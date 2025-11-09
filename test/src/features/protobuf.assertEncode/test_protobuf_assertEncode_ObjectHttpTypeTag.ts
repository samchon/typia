import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectHttpTypeTag = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
  encode: (input) => typia.protobuf.assertEncode<ObjectHttpTypeTag>(input),
  decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
  message: typia.protobuf.message<ObjectHttpTypeTag>(),
});
