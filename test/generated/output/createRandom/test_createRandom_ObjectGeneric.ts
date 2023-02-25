import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectGeneric = _test_random("ObjectGeneric", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.boolean ?? $generator.boolean)(),
        child: $ro1(recursive, recursive ? 1 + depth : depth),
        elements: (generator.array ?? $generator.array)(() => $ro1(recursive, recursive ? 1 + depth : depth))
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        child_value: (generator.boolean ?? $generator.boolean)(),
        child_next: (generator.boolean ?? $generator.boolean)()
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        value: (generator.number ?? $generator.number)(0, 100),
        child: $ro3(recursive, recursive ? 1 + depth : depth),
        elements: (generator.array ?? $generator.array)(() => $ro3(recursive, recursive ? 1 + depth : depth))
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        child_value: (generator.number ?? $generator.number)(0, 100),
        child_next: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        value: (generator.string ?? $generator.string)(),
        child: $ro5(recursive, recursive ? 1 + depth : depth),
        elements: (generator.array ?? $generator.array)(() => $ro5(recursive, recursive ? 1 + depth : depth))
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        child_value: (generator.string ?? $generator.string)(),
        child_next: (generator.string ?? $generator.string)()
    });
    return [
        $ro0(),
        $ro2(),
        $ro4()
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ({ value: boolean; child: { child_value: boolean; child_next: boolean; }; elements: { child_value: boolean; child_next: boolean; }[]; } | { value: number; child: { child_value: number; child_next: number; }; elements: { ...; }[]; } | { ...; })[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        })) && (("object" === typeof input.child && null !== input.child || $guard(_exceptionable, {
            path: _path + ".child",
            expected: "Resolve<__type.o1>",
            value: input.child
        })) && $ao1(input.child, _path + ".child", true && _exceptionable)) && ((Array.isArray(input.elements) || $guard(_exceptionable, {
            path: _path + ".elements",
            expected: "Array<Resolve<__type.o1>>",
            value: input.elements
        })) && input.elements.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".elements[" + _index2 + "]",
            expected: "Resolve<__type.o1>",
            value: elem
        })) && $ao1(elem, _path + ".elements[" + _index2 + "]", true && _exceptionable)));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("boolean" === typeof input.child_value || $guard(_exceptionable, {
            path: _path + ".child_value",
            expected: "boolean",
            value: input.child_value
        })) && ("boolean" === typeof input.child_next || $guard(_exceptionable, {
            path: _path + ".child_next",
            expected: "boolean",
            value: input.child_next
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        })) && (("object" === typeof input.child && null !== input.child || $guard(_exceptionable, {
            path: _path + ".child",
            expected: "Resolve<__type.o3>",
            value: input.child
        })) && $ao3(input.child, _path + ".child", true && _exceptionable)) && ((Array.isArray(input.elements) || $guard(_exceptionable, {
            path: _path + ".elements",
            expected: "Array<Resolve<__type.o3>>",
            value: input.elements
        })) && input.elements.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".elements[" + _index3 + "]",
            expected: "Resolve<__type.o3>",
            value: elem
        })) && $ao3(elem, _path + ".elements[" + _index3 + "]", true && _exceptionable)));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.child_value || $guard(_exceptionable, {
            path: _path + ".child_value",
            expected: "number",
            value: input.child_value
        })) && ("number" === typeof input.child_next || $guard(_exceptionable, {
            path: _path + ".child_next",
            expected: "number",
            value: input.child_next
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        })) && (("object" === typeof input.child && null !== input.child || $guard(_exceptionable, {
            path: _path + ".child",
            expected: "Resolve<__type.o5>",
            value: input.child
        })) && $ao5(input.child, _path + ".child", true && _exceptionable)) && ((Array.isArray(input.elements) || $guard(_exceptionable, {
            path: _path + ".elements",
            expected: "Array<Resolve<__type.o5>>",
            value: input.elements
        })) && input.elements.every((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".elements[" + _index4 + "]",
            expected: "Resolve<__type.o5>",
            value: elem
        })) && $ao5(elem, _path + ".elements[" + _index4 + "]", true && _exceptionable)));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.child_value || $guard(_exceptionable, {
            path: _path + ".child_value",
            expected: "string",
            value: input.child_value
        })) && ("string" === typeof input.child_next || $guard(_exceptionable, {
            path: _path + ".child_next",
            expected: "string",
            value: input.child_next
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("boolean" === typeof input.value)
                return $ao0(input, _path, true && _exceptionable);
            if ("number" === typeof input.value)
                return $ao2(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $ao4(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(__type | __type.o2 | __type.o4)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<__type.o2> | Resolve<__type.o4> | Resolve<__type>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<__type.o2> | Resolve<__type.o4> | Resolve<__type>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectGeneric>;
});
