import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_TemplateConstant =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)({
    decode: (input) =>
      typia.protobuf.assertDecode<TemplateConstant>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
  });
