import typia from "../../../../src";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ArrayRecursive = _test_assertEquals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input: any): ArrayRecursive.ICategory => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ArrayRecursive.ICategory => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.children) ||
                    $guard(_exceptionable, {
                        path: _path + ".children",
                        expected: "Array<Resolve<ArrayRecursive.ICategory>>",
                        value: input.children,
                    })) &&
                input.children.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".children[" + _index1 + "]",
                                expected: "Resolve<ArrayRecursive.ICategory>",
                                value: elem,
                            })) &&
                        $ao0(
                            elem,
                            _path + ".children[" + _index1 + "]",
                            true && _exceptionable,
                        ),
                ) &&
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "string",
                        value: input.code,
                    })) &&
                (("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $guard(_exceptionable, {
                        path: _path + ".sequence",
                        expected: "number",
                        value: input.sequence,
                    })) &&
                (("object" === typeof input.created_at &&
                    null !== input.created_at) ||
                    $guard(_exceptionable, {
                        path: _path + ".created_at",
                        expected: "Resolve<ArrayRecursive.ITimestamp>",
                        value: input.created_at,
                    })) &&
                $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                ) &&
                (5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "children",
                                "id",
                                "code",
                                "sequence",
                                "created_at",
                            ].some((prop) => key === prop)
                        )
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
                (("number" === typeof input.time &&
                    Number.isFinite(input.time)) ||
                    $guard(_exceptionable, {
                        path: _path + ".time",
                        expected: "number",
                        value: input.time,
                    })) &&
                (("number" === typeof input.zone &&
                    Number.isFinite(input.zone)) ||
                    $guard(_exceptionable, {
                        path: _path + ".zone",
                        expected: "number",
                        value: input.zone,
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["time", "zone"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ArrayRecursive.ICategory>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
