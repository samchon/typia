import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_assertDecode_ObjectOptional = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectOptional>(input),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
