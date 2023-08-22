import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_assertDecode_ObjectPrimitive =
    _test_protobuf_assertDecode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectPrimitive>(input),
        encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    });
