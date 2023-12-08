import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createValidateDecode_ObjectOptional =
  _test_protobuf_validateDecode("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )({
    decode: (input) => typia.protobuf.validateDecode<ObjectOptional>(input),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
  });
