import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createAssertDecodeCustom_TemplateConstant =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "TemplateConstant",
    )<TemplateConstant>(TemplateConstant)({
      decode: typia.protobuf.createAssertDecode<TemplateConstant>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<TemplateConstant>(),
    });
