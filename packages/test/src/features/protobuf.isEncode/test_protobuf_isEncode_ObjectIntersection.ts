import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createIsEncode_ObjectIntersection =
  _test_protobuf_isEncode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectIntersection>(input),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
  });
