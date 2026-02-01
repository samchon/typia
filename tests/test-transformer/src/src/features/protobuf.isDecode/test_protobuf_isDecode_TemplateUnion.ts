import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_isDecode_TemplateUnion = (): void => _test_protobuf_isDecode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  decode: (input) => typia.protobuf.isDecode<TemplateUnion>(input),
  encode: typia.protobuf.createEncode<TemplateUnion>(),
});
