import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_validateDecode_ObjectRequired = (): void =>
  _test_protobuf_validateDecode("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )({
    decode: (input) => typia.protobuf.validateDecode<ObjectRequired>(input),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
  });
