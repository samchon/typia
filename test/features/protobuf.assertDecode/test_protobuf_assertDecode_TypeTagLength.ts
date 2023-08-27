import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_assertDecode_TypeTagLength =
    _test_protobuf_assertDecode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagLength>(input),
        encode: typia.protobuf.createEncode<TypeTagLength>(),
    });
