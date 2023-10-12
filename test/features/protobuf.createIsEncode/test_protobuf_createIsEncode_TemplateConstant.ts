import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createIsEncode_TemplateConstant =
    _test_protobuf_isEncode("TemplateConstant")<TemplateConstant>(
        TemplateConstant,
    )({
        encode: typia.protobuf.createIsEncode<TemplateConstant>(),
        decode: typia.protobuf.createDecode<TemplateConstant>(),
        message: typia.protobuf.message<TemplateConstant>(),
    });
