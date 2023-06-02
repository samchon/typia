import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createIsPrune_ObjectGenericAlias = _test_isPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): input is ObjectGenericAlias => {
        const is: any = (input: any): input is ObjectGenericAlias => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        const prune: any = (input: ObjectGenericAlias): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
