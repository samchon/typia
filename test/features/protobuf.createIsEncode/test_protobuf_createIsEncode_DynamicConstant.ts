import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createIsEncode_DynamicConstant =
    _test_protobuf_isEncode("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )({
        encode: typia.protobuf.createIsEncode<DynamicConstant>(),
        decode: typia.protobuf.createDecode<DynamicConstant>(),
        message: typia.protobuf.message<DynamicConstant>(),
    });
