import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createAssertDecode_ObjectPrimitive =
    _test_protobuf_assertDecode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        decode: typia.protobuf.createAssertDecode<ObjectPrimitive>(),
        encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    });
