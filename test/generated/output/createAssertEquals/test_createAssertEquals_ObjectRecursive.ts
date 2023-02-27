import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_createAssertEquals_ObjectRecursive = _test_assertEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input: any): ObjectRecursive => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectRecursive => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (null === input.parent ||
                    ((("object" === typeof input.parent &&
                        null !== input.parent) ||
                        $guard(_exceptionable, {
                            path: _path + ".parent",
                            expected:
                                "(Resolve<ObjectRecursive.IDepartment> | null)",
                            value: input.parent,
                        })) &&
                        $ao0(
                            input.parent,
                            _path + ".parent",
                            true && _exceptionable,
                        ))) &&
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
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
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
                        expected: "Resolve<ObjectRecursive.ITimestamp>",
                        value: input.created_at,
                    })) &&
                $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                ) &&
                (6 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "parent",
                                "id",
                                "code",
                                "name",
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
                        expected: "Resolve<ObjectRecursive.IDepartment>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
