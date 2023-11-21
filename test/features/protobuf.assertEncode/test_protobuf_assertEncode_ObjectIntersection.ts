import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createAssertEncode_ObjectIntersection =
  _test_protobuf_assertEncode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectIntersection>(input),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
  });
