import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_assertDecode_TypeTagTypeUnion =
    _test_protobuf_assertDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagTypeUnion>(),
        encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
    });
