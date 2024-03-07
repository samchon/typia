import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectHttpTypeTag =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpTypeTag>(input),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
  });
