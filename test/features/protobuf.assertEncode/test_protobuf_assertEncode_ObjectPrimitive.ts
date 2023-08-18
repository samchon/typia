import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_assertEncode_ObjectPrimitive =
    _test_protobuf_assertEncode<ObjectPrimitive>(ObjectPrimitive)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectPrimitive>(input),
        message: typia.protobuf.message<ObjectPrimitive>(),
    });
