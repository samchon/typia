import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectGenericAlias = _test_isPrune("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): input is Alias => { const is = (input: any): input is Alias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; const prune = (input: Alias): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectGenericAlias.SPOILERS);
