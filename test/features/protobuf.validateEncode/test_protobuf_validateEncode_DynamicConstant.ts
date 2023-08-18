import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_validateEncode_DynamicConstant =
    _test_protobuf_validateEncode<DynamicConstant>(DynamicConstant)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<DynamicConstant>(input),
        message: typia.protobuf.message<DynamicConstant>(),
    });
