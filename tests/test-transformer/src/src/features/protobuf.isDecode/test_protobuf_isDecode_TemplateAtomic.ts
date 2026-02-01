import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_isDecode_TemplateAtomic = (): void => _test_protobuf_isDecode(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  decode: (input) => typia.protobuf.isDecode<TemplateAtomic>(input),
  encode: typia.protobuf.createEncode<TemplateAtomic>(),
});
