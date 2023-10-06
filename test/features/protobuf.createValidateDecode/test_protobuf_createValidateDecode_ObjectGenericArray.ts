import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createValidateDecode_ObjectGenericArray =
    _test_protobuf_validateDecode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        decode: typia.protobuf.createValidateDecode<ObjectGenericArray>(),
        encode: typia.protobuf.createEncode<ObjectGenericArray>(),
    });
