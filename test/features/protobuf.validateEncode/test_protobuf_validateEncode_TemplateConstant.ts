import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_validateEncode_TemplateConstant =
    _test_protobuf_validateEncode("TemplateConstant")<TemplateConstant>(
        TemplateConstant,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TemplateConstant>(input),
        message: typia.protobuf.message<TemplateConstant>(),
        decode: typia.protobuf.createDecode<TemplateConstant>(),
    });
