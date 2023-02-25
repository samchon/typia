import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ObjectUnionNonPredictable = _test_assertEquals("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionNonPredictable => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>>",
            value: input.value
        })) && $ao1(input.value, _path + ".value", true && _exceptionable) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(Resolve<ObjectUnionNonPredictable.IWrapper<boolean>> | Resolve<ObjectUnionNonPredictable.IWrapper<number>> | Resolve<ObjectUnionNonPredictable.IWrapper<string>>)",
            value: input.value
        })) && $au0(input.value, _path + ".value", true && _exceptionable) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<boolean>>",
            value: input.value
        })) && $ao3(input.value, _path + ".value", true && _exceptionable) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<number>>",
            value: input.value
        })) && $ao5(input.value, _path + ".value", true && _exceptionable) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<string>>",
            value: input.value
        })) && $ao7(input.value, _path + ".value", true && _exceptionable) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao7 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ($ao2(input, _path, false && _exceptionable))
                return $ao2(input, _path, true && _exceptionable);
            if ($ao4(input, _path, false && _exceptionable))
                return $ao4(input, _path, true && _exceptionable);
            if ($ao6(input, _path, false && _exceptionable))
                return $ao6(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectUnionNonPredictable;
});
