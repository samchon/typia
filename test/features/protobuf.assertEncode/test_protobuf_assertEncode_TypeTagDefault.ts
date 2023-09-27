import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_assertEncode_TypeTagDefault =
    _test_protobuf_assertEncode("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagDefault>(input),
        message: typia.protobuf.message<TypeTagDefault>(),
        decode: typia.protobuf.createDecode<TypeTagDefault>(),
    });
