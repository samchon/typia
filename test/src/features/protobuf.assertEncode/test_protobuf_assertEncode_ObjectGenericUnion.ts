import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createAssertEncode_ObjectGenericUnion =
  _test_protobuf_assertEncode("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectGenericUnion>(input),
    decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
    message: typia.protobuf.message<ObjectGenericUnion>(),
  });
