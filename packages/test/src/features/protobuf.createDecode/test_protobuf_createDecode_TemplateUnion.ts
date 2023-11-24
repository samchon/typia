import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createDecode_TemplateUnion = _test_protobuf_decode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  decode: typia.protobuf.createDecode<TemplateUnion>(),
  encode: typia.protobuf.createEncode<TemplateUnion>(),
});
