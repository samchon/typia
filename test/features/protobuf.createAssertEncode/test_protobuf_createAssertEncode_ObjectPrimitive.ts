import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createAssertEncode_ObjectPrimitive =
    _test_protobuf_assertEncode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectPrimitive>(),
        message: typia.protobuf.message<ObjectPrimitive>(),
        decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    });
