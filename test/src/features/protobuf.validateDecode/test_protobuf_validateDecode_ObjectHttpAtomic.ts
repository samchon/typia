import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_validateDecode_ObjectHttpAtomic = (): void =>
  _test_protobuf_validateDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    decode: (input) => typia.protobuf.validateDecode<ObjectHttpAtomic>(input),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
  });
