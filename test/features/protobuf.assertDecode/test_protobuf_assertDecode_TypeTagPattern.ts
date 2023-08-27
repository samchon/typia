import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_assertDecode_TypeTagPattern =
    _test_protobuf_assertDecode("TypeTagPattern")<TypeTagPattern>(
        TypeTagPattern,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagPattern>(input),
        encode: typia.protobuf.createEncode<TypeTagPattern>(),
    });
