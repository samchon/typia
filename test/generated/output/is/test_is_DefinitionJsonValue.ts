import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_is_DefinitionJsonValue = _test_is("DefinitionJsonValue", DefinitionJsonValue.generate, (input) => ((input: any): input is string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null => {
    const $join = (typia.is as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)) || $id0(input));
})(input), DefinitionJsonValue.SPOILERS);
