import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_encode_ObjectIntersection = _test_protobuf_encode(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)({
    encode: typia.protobuf.createEncode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
});
