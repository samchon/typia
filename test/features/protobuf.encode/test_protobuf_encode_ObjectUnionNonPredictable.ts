import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_encode_ObjectUnionNonPredictable =
    _test_protobuf_encode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        encode: (input) =>
            typia.protobuf.encode<ObjectUnionNonPredictable>(input),
        message: typia.protobuf.message<ObjectUnionNonPredictable>(),
        decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    });
