import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_assertEncode_ObjectGenericArray =
    _test_protobuf_assertEncode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectGenericArray>(),
        message: typia.protobuf.message<ObjectGenericArray>(),
        decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    });
