import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createDecode_TemplateConstant = (): void => _test_protobuf_decode(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
  decode: typia.protobuf.createDecode<TemplateConstant>(),
  encode: typia.protobuf.createEncode<TemplateConstant>(),
});
