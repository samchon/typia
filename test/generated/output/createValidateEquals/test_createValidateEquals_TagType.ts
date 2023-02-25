import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_TagType = _test_validateEquals("TagType", TagType.generate, (input: any): typia.IValidation<TagType> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is TagType => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.int && parseInt(input.int) === input.int || $report(_exceptionable, {
                path: _path + ".int",
                expected: "number",
                value: input.int
            }), "number" === typeof input.uint && parseInt(input.uint) === input.uint && 0 <= input.uint || $report(_exceptionable, {
                path: _path + ".uint",
                expected: "number",
                value: input.uint
            }), 2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["int", "uint"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagType.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagType.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagType.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagType.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagType>;
});
