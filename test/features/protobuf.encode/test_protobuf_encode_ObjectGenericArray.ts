import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_encode_ObjectGenericArray =
    _test_protobuf_encode<ObjectGenericArray>(ObjectGenericArray)({
        encode: (input) => typia.protobuf.encode<ObjectGenericArray>(input),
        message: typia.protobuf.message<ObjectGenericArray>(),
    });
