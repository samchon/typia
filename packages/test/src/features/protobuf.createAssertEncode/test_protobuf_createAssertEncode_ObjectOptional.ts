import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createAssertEncode_ObjectOptional =
  _test_protobuf_assertEncode("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    {
      encode: typia.protobuf.createAssertEncode<ObjectOptional>(),
      decode: typia.protobuf.createDecode<ObjectOptional>(),
      message: typia.protobuf.message<ObjectOptional>(),
    },
  );
