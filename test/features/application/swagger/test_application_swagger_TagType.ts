import typia from "typia";

import { TagType } from "../../../structures/TagType";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagType = _test_application("swagger")(
    "TagType",
    typia.application<[TagType], "swagger">(),
);
