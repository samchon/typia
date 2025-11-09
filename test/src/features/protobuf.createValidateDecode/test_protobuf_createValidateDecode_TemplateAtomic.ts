import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createValidateDecode_TemplateAtomic = (): void => _test_protobuf_validateDecode(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  decode: typia.protobuf.createValidateDecode<TemplateAtomic>(),
  encode: typia.protobuf.createEncode<TemplateAtomic>(),
});
