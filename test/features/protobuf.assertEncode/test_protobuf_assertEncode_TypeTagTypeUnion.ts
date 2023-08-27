import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_assertEncode_TypeTagTypeUnion =
    _test_protobuf_assertEncode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagTypeUnion>(input),
        message: typia.protobuf.message<TypeTagTypeUnion>(),
        decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    });
