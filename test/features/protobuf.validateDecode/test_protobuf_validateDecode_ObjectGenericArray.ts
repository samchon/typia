import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_validateDecode_ObjectGenericArray =
    _test_protobuf_validateDecode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectGenericArray>(input),
        encode: typia.protobuf.createEncode<ObjectGenericArray>(),
    });
