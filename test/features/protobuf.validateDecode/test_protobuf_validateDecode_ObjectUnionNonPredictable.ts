import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_validateDecode_ObjectUnionNonPredictable =
    _test_protobuf_validateDecode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectUnionNonPredictable>(input),
        encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
