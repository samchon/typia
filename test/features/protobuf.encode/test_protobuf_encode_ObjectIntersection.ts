import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_encode_ObjectIntersection =
    _test_protobuf_encode<ObjectIntersection>(ObjectIntersection)({
        encode: (input) => typia.protobuf.encode<ObjectIntersection>(input),
        message: typia.protobuf.message<ObjectIntersection>(),
    });
