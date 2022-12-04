import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionExplicit =
    _test_validateStringify(
        "ObjectUnionExplicit",
        ObjectUnionExplicit.generate,
        (input) => TSON.validateStringify(input),
        ObjectUnionExplicit.SPOILERS,
    );
