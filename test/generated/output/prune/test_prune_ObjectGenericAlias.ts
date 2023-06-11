import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_ObjectGenericAlias = _test_prune("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: ObjectGenericAlias.ISomething<string>): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
