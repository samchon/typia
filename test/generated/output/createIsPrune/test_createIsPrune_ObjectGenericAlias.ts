import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createIsPrune_ObjectGenericAlias = _test_isPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): input is ObjectGenericAlias.ISomething<string> => {
        const is = (input: any): input is ObjectGenericAlias.Alias => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        const prune = (input: ObjectGenericAlias.Alias): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectGenericAlias.SPOILERS,
);
