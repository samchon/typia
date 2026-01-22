import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_validateDecode_ObjectIntersection = (): void =>
  _test_protobuf_validateDecode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    decode: (input) => typia.protobuf.validateDecode<ObjectIntersection>(input),
    encode: typia.protobuf.createEncode<ObjectIntersection>(),
  });
