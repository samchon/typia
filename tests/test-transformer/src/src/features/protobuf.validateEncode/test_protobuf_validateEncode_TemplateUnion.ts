import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_validateEncode_TemplateUnion = (): void => _test_protobuf_validateEncode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  encode: (input) => typia.protobuf.validateEncode<TemplateUnion>(input),
  decode: typia.protobuf.createDecode<TemplateUnion>(),
  message: typia.protobuf.message<TemplateUnion>(),
});
