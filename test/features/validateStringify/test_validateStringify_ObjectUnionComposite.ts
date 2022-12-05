import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionComposite =
    _test_validateStringify(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        (input) => TSON.validateStringify(input),
        ObjectUnionComposite.SPOILERS,
    );
