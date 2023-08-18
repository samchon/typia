import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_assertEncode_ObjectUnionNonPredictable =
    _test_protobuf_assertEncode<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectUnionNonPredictable>(input),
        message: typia.protobuf.message<ObjectUnionNonPredictable>(),
    });
