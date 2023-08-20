import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_validateStringify_ObjectGenericAlias =
    _test_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        (input) => typia.validateStringify<ObjectGenericAlias>(input),
        ObjectGenericAlias.SPOILERS,
    );
