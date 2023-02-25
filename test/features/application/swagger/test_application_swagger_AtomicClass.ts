import typia from "typia";

import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_AtomicClass = _test_application(
    "swagger",
)("AtomicClass", typia.application<[AtomicClass], "swagger">());
