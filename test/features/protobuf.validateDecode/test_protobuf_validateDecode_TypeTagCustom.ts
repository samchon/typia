import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_validateDecode_TypeTagCustom =
    _test_protobuf_validateDecode("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TypeTagCustom>(input),
        encode: typia.protobuf.createEncode<TypeTagCustom>(),
    });
