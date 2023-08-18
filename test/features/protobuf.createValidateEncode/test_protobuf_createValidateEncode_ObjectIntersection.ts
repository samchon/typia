import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_validateEncode_ObjectIntersection =
    _test_protobuf_validateEncode<ObjectIntersection>(ObjectIntersection)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectIntersection>(),
        message: typia.protobuf.message<ObjectIntersection>(),
    });
