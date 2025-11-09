import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateDecode_ObjectHttpAtomic = (): void =>
  _test_protobuf_validateDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectHttpAtomic>(),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
  });
