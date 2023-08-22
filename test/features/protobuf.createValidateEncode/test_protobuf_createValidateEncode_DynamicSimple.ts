import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_validateEncode_DynamicSimple =
    _test_protobuf_validateEncode("DynamicSimple")<DynamicSimple>(
        DynamicSimple,
    )({
        validateEncode: typia.protobuf.createValidateEncode<DynamicSimple>(),
        message: typia.protobuf.message<DynamicSimple>(),
        decode: typia.protobuf.createDecode<DynamicSimple>(),
    });
