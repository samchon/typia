import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TemplateConstant =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)({
    decode: typia.protobuf.createAssertDecode<TemplateConstant>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
  });
