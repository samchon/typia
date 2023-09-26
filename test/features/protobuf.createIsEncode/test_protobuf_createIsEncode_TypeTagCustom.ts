import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createIsEncode_TypeTagCustom =
    _test_protobuf_isEncode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
        isEncode: typia.protobuf.createIsEncode<TypeTagCustom>(),
        message: typia.protobuf.message<TypeTagCustom>(),
        decode: typia.protobuf.createDecode<TypeTagCustom>(),
    });
