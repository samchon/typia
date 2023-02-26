import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validateStringify_ObjectGenericUnion =
    _test_validateStringify(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        (input) => typia.validateStringify(input),
        ObjectGenericUnion.SPOILERS,
    );
