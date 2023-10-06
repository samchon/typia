import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createValidateEncode_ObjectIntersection =
    _test_protobuf_validateEncode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        encode: (input) =>
            typia.protobuf.validateEncode<ObjectIntersection>(input),
        decode: typia.protobuf.createDecode<ObjectIntersection>(),
        message: typia.protobuf.message<ObjectIntersection>(),
    });
