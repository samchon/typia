import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_validateEncode_ObjectUnionNonPredictable =
    _test_protobuf_validateEncode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectUnionNonPredictable>(input),
        message: typia.protobuf.message<ObjectUnionNonPredictable>(),
    });
