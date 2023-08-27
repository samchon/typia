import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_assertDecode_TypeTagInfinite =
    _test_protobuf_assertDecode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagInfinite>(),
        encode: typia.protobuf.createEncode<TypeTagInfinite>(),
    });
