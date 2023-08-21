import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_validateEncode_ObjectGenericArray =
    _test_protobuf_validateEncode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectGenericArray>(),
        message: typia.protobuf.message<ObjectGenericArray>(),
    });
