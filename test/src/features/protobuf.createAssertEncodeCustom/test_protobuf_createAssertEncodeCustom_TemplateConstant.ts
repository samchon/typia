import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TemplateConstant = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
  encode: typia.protobuf.createAssertEncode<TemplateConstant>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TemplateConstant>(),
  message: typia.protobuf.message<TemplateConstant>(),
});
