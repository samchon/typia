import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_isPrune_ObjectGenericAlias =
    _test_misc_isPrune<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        ((input: any): input is ObjectGenericAlias => {
            const is = (input: any): input is ObjectGenericAlias => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).value
                );
            };
            const prune = (input: ObjectGenericAlias): void => {
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
        })(input),
    );
