import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createIsEncode_ObjectUnionNonPredictable =
    _test_protobuf_isEncode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        isEncode: typia.protobuf.createIsEncode<ObjectUnionNonPredictable>(),
        message: typia.protobuf.message<ObjectUnionNonPredictable>(),
        decode: typia.protobuf.createDecode<ObjectUnionNonPredictable>(),
    });
