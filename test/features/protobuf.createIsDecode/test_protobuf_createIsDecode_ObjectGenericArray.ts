import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_isDecode_ObjectGenericArray =
    _test_protobuf_isDecode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        isDecode: typia.protobuf.createIsDecode<ObjectGenericArray>(),
        encode: typia.protobuf.createEncode<ObjectGenericArray>(),
    });
