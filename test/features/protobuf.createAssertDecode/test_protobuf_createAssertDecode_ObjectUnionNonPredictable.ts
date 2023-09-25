import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createAssertDecode_ObjectUnionNonPredictable =
    _test_protobuf_assertDecode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        assertDecode:
            typia.protobuf.createAssertDecode<ObjectUnionNonPredictable>(),
        encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
