import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createEncode_ObjectHttpAtomic =
  _test_protobuf_encode("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    {
      encode: (input) => typia.protobuf.encode<ObjectHttpAtomic>(input),
      decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
      message: typia.protobuf.message<ObjectHttpAtomic>(),
    },
  );
