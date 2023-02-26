import typia from "typia";

import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectLiteralProperty = _test_application(
    "swagger",
)(
    "ObjectLiteralProperty",
    typia.application<[ObjectLiteralProperty], "swagger">(),
);
