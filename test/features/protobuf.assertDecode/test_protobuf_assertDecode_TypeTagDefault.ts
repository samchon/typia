import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_assertDecode_TypeTagDefault =
    _test_protobuf_assertDecode("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagDefault>(input),
        encode: typia.protobuf.createEncode<TypeTagDefault>(),
    });
