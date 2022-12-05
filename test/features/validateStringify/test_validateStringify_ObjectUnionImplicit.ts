import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionImplicit =
    _test_validateStringify(
        "ObjectUnionImplicit",
        ObjectUnionImplicit.generate,
        (input) => TSON.validateStringify(input),
        ObjectUnionImplicit.SPOILERS,
    );
