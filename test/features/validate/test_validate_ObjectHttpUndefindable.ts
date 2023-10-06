import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_validate_ObjectHttpUndefindable = _test_validate(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((input) => typia.validate<ObjectHttpUndefindable>(input));
