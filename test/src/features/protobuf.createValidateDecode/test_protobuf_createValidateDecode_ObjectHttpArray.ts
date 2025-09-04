import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createValidateDecode_ObjectHttpArray = (): void =>
  _test_protobuf_validateDecode("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectHttpArray>(),
    encode: typia.protobuf.createEncode<ObjectHttpArray>(),
  });
