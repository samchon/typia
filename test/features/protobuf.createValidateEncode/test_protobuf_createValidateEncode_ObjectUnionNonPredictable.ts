import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_validateEncode_ObjectUnionNonPredictable =
    _test_protobuf_validateEncode<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectUnionNonPredictable>(),
        message: typia.protobuf.message<ObjectUnionNonPredictable>(),
    });
