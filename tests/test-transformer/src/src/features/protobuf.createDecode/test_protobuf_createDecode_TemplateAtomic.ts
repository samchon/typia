import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createDecode_TemplateAtomic = (): void => _test_protobuf_decode(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  decode: typia.protobuf.createDecode<TemplateAtomic>(),
  encode: typia.protobuf.createEncode<TemplateAtomic>(),
});
