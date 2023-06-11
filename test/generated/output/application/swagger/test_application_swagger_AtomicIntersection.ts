import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";

export const test_application_swagger_AtomicIntersection = _test_application(
    "swagger",
)("AtomicIntersection", typia.application<[AtomicIntersection], "swagger">());
