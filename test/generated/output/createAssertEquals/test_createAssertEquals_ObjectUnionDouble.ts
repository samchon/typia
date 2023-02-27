import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertEquals_ObjectUnionDouble = _test_assertEquals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): ObjectUnionDouble => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectUnionDouble => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type>",
                        value: input.value,
                    })) &&
                $ao1(input.value, _path + ".value", true && _exceptionable) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                        value: input.child,
                    })) &&
                $au0(input.child, _path + ".child", true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value", "child"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["x"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type.o1>",
                        value: input.value,
                    })) &&
                $ao3(input.value, _path + ".value", true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("boolean" === typeof input.y ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "boolean",
                        value: input.y,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type.o2>",
                        value: input.value,
                    })) &&
                $ao5(input.value, _path + ".value", true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type.o3>",
                        value: input.value,
                    })) &&
                $ao7(input.value, _path + ".value", true && _exceptionable) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                        value: input.child,
                    })) &&
                $au1(input.child, _path + ".child", true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value", "child"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.x ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "string",
                        value: input.x,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["x"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type.o4>",
                        value: input.value,
                    })) &&
                $ao9(input.value, _path + ".value", true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao9 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.y ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "string",
                        value: input.y,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao10 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Resolve<__type.o5>",
                        value: input.value,
                    })) &&
                $ao11(input.value, _path + ".value", true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao11 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.y) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "Array<number>",
                        value: input.y,
                    })) &&
                input.y.every(
                    (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(_exceptionable, {
                            path: _path + ".y[" + _index2 + "]",
                            expected: "number",
                            value: elem,
                        }),
                ) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ($ao2(input, _path, false && _exceptionable))
                        return $ao2(input, _path, true && _exceptionable);
                    if ($ao4(input, _path, false && _exceptionable))
                        return $ao4(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                        value: input,
                    });
                })();
            const $au1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ($ao8(input, _path, false && _exceptionable))
                        return $ao8(input, _path, true && _exceptionable);
                    if ($ao10(input, _path, false && _exceptionable))
                        return $ao10(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                        value: input,
                    });
                })();
            const $au2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ($ao0(input, _path, false && _exceptionable))
                        return $ao0(input, _path, true && _exceptionable);
                    if ($ao6(input, _path, false && _exceptionable))
                        return $ao6(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
                                value: elem,
                            })) &&
                        $au2(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
