import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validateEquals_ObjectOptional =
    _test_validateEquals<ObjectOptional>(ObjectOptional)((input) =>
        typia.validateEquals(input),
    );
