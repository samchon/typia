import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectClosure =
    _test_validateStringify(
        "ObjectClosure",
        ObjectClosure.generate,
        typia.createValidateStringify<ObjectClosure>(),
        ObjectClosure.SPOILERS,
    );
