import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_encode_TemplateConstant = _test_protobuf_encode(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
    encode: typia.protobuf.createEncode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
});
