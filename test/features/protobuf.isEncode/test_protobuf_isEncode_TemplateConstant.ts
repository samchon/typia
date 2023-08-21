import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_isEncode_TemplateConstant = _test_protobuf_isEncode(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
    isEncode: (input) => typia.protobuf.isEncode<TemplateConstant>(input),
    message: typia.protobuf.message<TemplateConstant>(),
});
