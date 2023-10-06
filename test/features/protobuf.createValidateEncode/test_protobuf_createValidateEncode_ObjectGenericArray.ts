import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createValidateEncode_ObjectGenericArray =
    _test_protobuf_validateEncode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        encode: typia.protobuf.createValidateEncode<ObjectGenericArray>(),
        decode: typia.protobuf.createDecode<ObjectGenericArray>(),
        message: typia.protobuf.message<ObjectGenericArray>(),
    });
