import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createAssertDecode_TypeTagCustom =
    _test_protobuf_assertDecode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagCustom>(),
        encode: typia.protobuf.createEncode<TypeTagCustom>(),
    });
