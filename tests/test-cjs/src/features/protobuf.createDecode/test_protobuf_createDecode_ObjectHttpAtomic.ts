import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createDecode_ObjectHttpAtomic = (): void =>
  _test_protobuf_decode("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    {
      decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
      encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
    },
  );
