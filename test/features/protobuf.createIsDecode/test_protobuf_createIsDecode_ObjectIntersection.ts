import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createIsDecode_ObjectIntersection =
    _test_protobuf_isDecode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        decode: typia.protobuf.createIsDecode<ObjectIntersection>(),
        encode: typia.protobuf.createEncode<ObjectIntersection>(),
    });
