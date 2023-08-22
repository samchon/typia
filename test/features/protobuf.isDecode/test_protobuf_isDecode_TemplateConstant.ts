import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_isDecode_TemplateConstant = _test_protobuf_isDecode(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
    isDecode: (input) => typia.protobuf.isDecode<TemplateConstant>(input),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
});
