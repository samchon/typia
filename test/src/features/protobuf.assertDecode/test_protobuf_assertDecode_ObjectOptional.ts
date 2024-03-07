import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectOptional =
  _test_protobuf_assertDecode(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectOptional>(input),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
