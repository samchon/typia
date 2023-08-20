import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_validateStringify_ObjectUnionComposite =
    _test_validateStringify(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        (input) => typia.validateStringify<ObjectUnionComposite>(input),
        ObjectUnionComposite.SPOILERS,
    );
