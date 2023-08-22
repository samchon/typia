import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_assertDecode_ObjectGenericArray =
    _test_protobuf_assertDecode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectGenericArray>(input),
        encode: typia.protobuf.createEncode<ObjectGenericArray>(),
    });
