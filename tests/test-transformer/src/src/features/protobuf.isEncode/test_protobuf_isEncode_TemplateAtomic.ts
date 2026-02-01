import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_isEncode_TemplateAtomic = (): void => _test_protobuf_isEncode(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  encode: (input) => typia.protobuf.isEncode<TemplateAtomic>(input),
  decode: typia.protobuf.createDecode<TemplateAtomic>(),
  message: typia.protobuf.message<TemplateAtomic>(),
});
