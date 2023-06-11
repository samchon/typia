import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createValidateStringify_ObjectUnionComposite =
    _test_validateStringify(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        typia.createValidateStringify<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
