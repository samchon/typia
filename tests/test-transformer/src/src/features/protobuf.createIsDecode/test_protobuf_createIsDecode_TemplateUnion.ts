import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createIsDecode_TemplateUnion = (): void => _test_protobuf_isDecode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  decode: typia.protobuf.createIsDecode<TemplateUnion>(),
  encode: typia.protobuf.createEncode<TemplateUnion>(),
});
