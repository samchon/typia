import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createIsEncode_ObjectIntersection = _test_protobuf_isEncode(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)({
    encode: typia.protobuf.createIsEncode<ObjectIntersection>(),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
});
