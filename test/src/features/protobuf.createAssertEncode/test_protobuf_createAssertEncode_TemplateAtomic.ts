import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_TemplateAtomic = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  encode: typia.protobuf.createAssertEncode<TemplateAtomic>(),
  decode: typia.protobuf.createDecode<TemplateAtomic>(),
  message: typia.protobuf.message<TemplateAtomic>(),
});
