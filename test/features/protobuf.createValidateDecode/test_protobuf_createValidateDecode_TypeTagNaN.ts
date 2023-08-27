import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_validateDecode_TypeTagNaN =
    _test_protobuf_validateDecode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
        validateDecode: typia.protobuf.createValidateDecode<TypeTagNaN>(),
        encode: typia.protobuf.createEncode<TypeTagNaN>(),
    });
