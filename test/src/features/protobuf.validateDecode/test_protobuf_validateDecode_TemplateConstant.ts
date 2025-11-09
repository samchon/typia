import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_validateDecode_TemplateConstant = (): void => _test_protobuf_validateDecode(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
  decode: (input) => typia.protobuf.validateDecode<TemplateConstant>(input),
  encode: typia.protobuf.createEncode<TemplateConstant>(),
});
