import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_validateDecode_ObjectIntersection =
    _test_protobuf_validateDecode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectIntersection>(input),
        encode: typia.protobuf.createEncode<ObjectIntersection>(),
    });
