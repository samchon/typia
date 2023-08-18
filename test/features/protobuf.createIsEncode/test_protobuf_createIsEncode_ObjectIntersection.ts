import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_isEncode_ObjectIntersection =
    _test_protobuf_isEncode<ObjectIntersection>(ObjectIntersection)({
        isEncode: typia.protobuf.createIsEncode<ObjectIntersection>(),
        message: typia.protobuf.message<ObjectIntersection>(),
    });
