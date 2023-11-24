import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createValidateDecode_ClassNonPublic =
  _test_protobuf_validateDecode("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: (input) => typia.protobuf.validateDecode<ClassNonPublic>(input),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
