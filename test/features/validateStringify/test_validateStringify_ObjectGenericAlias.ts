import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectGenericAlias =
    _test_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        (input) => typia.validateStringify(input),
        ObjectGenericAlias.SPOILERS,
    );
