import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_validate_ObjectDynamic = _test_validate<ObjectDynamic>(
    ObjectDynamic,
)((input) => typia.validate<ObjectDynamic>(input));
