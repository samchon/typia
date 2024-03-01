import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_isEncode_TemplateUnion = _test_protobuf_isEncode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  encode: (input) => typia.protobuf.isEncode<TemplateUnion>(input),
  decode: typia.protobuf.createDecode<TemplateUnion>(),
  message: typia.protobuf.message<TemplateUnion>(),
});
