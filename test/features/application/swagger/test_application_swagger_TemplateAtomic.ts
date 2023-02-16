import typia from "typia";

import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TemplateAtomic = _test_application(
    "swagger",
)("TemplateAtomic", typia.application<[TemplateAtomic], "swagger">());
