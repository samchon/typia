import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_validateEquals_ObjectHttpUndefindable = _test_validateEquals(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((input) => typia.validateEquals<ObjectHttpUndefindable>(input));
