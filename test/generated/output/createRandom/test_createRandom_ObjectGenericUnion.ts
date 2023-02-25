import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectGenericUnion = _test_random("ObjectGenericUnion", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        writer: (generator.string ?? $generator.string)(),
        answer: $ro1(recursive, recursive ? 1 + depth : depth),
        id: (generator.string ?? $generator.string)(),
        hit: (generator.number ?? $generator.number)(0, 100),
        contents: (generator.array ?? $generator.array)(() => $ro2(recursive, recursive ? 1 + depth : depth)),
        created_at: (generator.string ?? $generator.string)()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        hit: (generator.number ?? $generator.number)(0, 100),
        contents: (generator.array ?? $generator.array)(() => $ro2(recursive, recursive ? 1 + depth : depth)),
        created_at: (generator.string ?? $generator.string)()
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        created_at: (generator.string ?? $generator.string)(),
        title: (generator.string ?? $generator.string)(),
        body: (generator.string ?? $generator.string)(),
        files: (generator.array ?? $generator.array)(() => $ro3(recursive, recursive ? 1 + depth : depth))
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        name: (generator.string ?? $generator.string)(),
        extension: (generator.string ?? $generator.string)(),
        url: (generator.string ?? $generator.string)()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        writer: (generator.string ?? $generator.string)(),
        answer: $ro1(recursive, recursive ? 1 + depth : depth),
        id: (generator.string ?? $generator.string)(),
        hit: (generator.number ?? $generator.number)(0, 100),
        contents: (generator.array ?? $generator.array)(() => $ro5(recursive, recursive ? 1 + depth : depth)),
        created_at: (generator.string ?? $generator.string)()
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        score: (generator.number ?? $generator.number)(0, 100),
        id: (generator.string ?? $generator.string)(),
        created_at: (generator.string ?? $generator.string)(),
        title: (generator.string ?? $generator.string)(),
        body: (generator.string ?? $generator.string)(),
        files: (generator.array ?? $generator.array)(() => $ro3(recursive, recursive ? 1 + depth : depth))
    });
    return $pick([
        () => $ro0(),
        () => $ro4()
    ])();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { writer: string; answer: { id: string; hit: number; contents: { id: string; created_at: string; title: string; body: string; files: { name: string; extension: string; url: string; }[]; }[]; created_at: string; }; id: string; hit: number; contents: { ...; }[]; created_at: string; } | { ...; } => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.writer || $guard(_exceptionable, {
            path: _path + ".writer",
            expected: "string",
            value: input.writer
        })) && (("object" === typeof input.answer && null !== input.answer || $guard(_exceptionable, {
            path: _path + ".answer",
            expected: "Resolve<__type.o1>",
            value: input.answer
        })) && $ao1(input.answer, _path + ".answer", true && _exceptionable)) && ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("number" === typeof input.hit || $guard(_exceptionable, {
            path: _path + ".hit",
            expected: "number",
            value: input.hit
        })) && ((Array.isArray(input.contents) || $guard(_exceptionable, {
            path: _path + ".contents",
            expected: "Array<Resolve<__type.o2>>",
            value: input.contents
        })) && input.contents.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".contents[" + _index1 + "]",
            expected: "Resolve<__type.o2>",
            value: elem
        })) && $ao2(elem, _path + ".contents[" + _index1 + "]", true && _exceptionable))) && ("string" === typeof input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "string",
            value: input.created_at
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("number" === typeof input.hit || $guard(_exceptionable, {
            path: _path + ".hit",
            expected: "number",
            value: input.hit
        })) && ((Array.isArray(input.contents) || $guard(_exceptionable, {
            path: _path + ".contents",
            expected: "Array<Resolve<__type.o2>>",
            value: input.contents
        })) && input.contents.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".contents[" + _index2 + "]",
            expected: "Resolve<__type.o2>",
            value: elem
        })) && $ao2(elem, _path + ".contents[" + _index2 + "]", true && _exceptionable))) && ("string" === typeof input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "string",
            value: input.created_at
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "string",
            value: input.created_at
        })) && ("string" === typeof input.title || $guard(_exceptionable, {
            path: _path + ".title",
            expected: "string",
            value: input.title
        })) && ("string" === typeof input.body || $guard(_exceptionable, {
            path: _path + ".body",
            expected: "string",
            value: input.body
        })) && ((Array.isArray(input.files) || $guard(_exceptionable, {
            path: _path + ".files",
            expected: "Array<Resolve<__type.o3>>",
            value: input.files
        })) && input.files.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".files[" + _index3 + "]",
            expected: "Resolve<__type.o3>",
            value: elem
        })) && $ao3(elem, _path + ".files[" + _index3 + "]", true && _exceptionable)));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.extension || $guard(_exceptionable, {
            path: _path + ".extension",
            expected: "string",
            value: input.extension
        })) && ("string" === typeof input.url || $guard(_exceptionable, {
            path: _path + ".url",
            expected: "string",
            value: input.url
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.writer || $guard(_exceptionable, {
            path: _path + ".writer",
            expected: "string",
            value: input.writer
        })) && (("object" === typeof input.answer && null !== input.answer || $guard(_exceptionable, {
            path: _path + ".answer",
            expected: "Resolve<__type.o1>",
            value: input.answer
        })) && $ao1(input.answer, _path + ".answer", true && _exceptionable)) && ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("number" === typeof input.hit || $guard(_exceptionable, {
            path: _path + ".hit",
            expected: "number",
            value: input.hit
        })) && ((Array.isArray(input.contents) || $guard(_exceptionable, {
            path: _path + ".contents",
            expected: "Array<Resolve<__type.o5>>",
            value: input.contents
        })) && input.contents.every((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".contents[" + _index4 + "]",
            expected: "Resolve<__type.o5>",
            value: elem
        })) && $ao5(elem, _path + ".contents[" + _index4 + "]", true && _exceptionable))) && ("string" === typeof input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "string",
            value: input.created_at
        }));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.score || $guard(_exceptionable, {
            path: _path + ".score",
            expected: "number",
            value: input.score
        })) && ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "string",
            value: input.created_at
        })) && ("string" === typeof input.title || $guard(_exceptionable, {
            path: _path + ".title",
            expected: "string",
            value: input.title
        })) && ("string" === typeof input.body || $guard(_exceptionable, {
            path: _path + ".body",
            expected: "string",
            value: input.body
        })) && ((Array.isArray(input.files) || $guard(_exceptionable, {
            path: _path + ".files",
            expected: "Array<Resolve<__type.o3>>",
            value: input.files
        })) && input.files.every((elem: any, _index5: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".files[" + _index5 + "]",
            expected: "Resolve<__type.o3>",
            value: elem
        })) && $ao3(elem, _path + ".files[" + _index5 + "]", true && _exceptionable)));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => $ao0(input, _path, false && _exceptionable) || $ao4(input, _path, false && _exceptionable) || $guard(_exceptionable, {
            path: _path,
            expected: "(__type | __type.o4)",
            value: input
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "(Resolve<__type.o4> | Resolve<__type>)",
            value: input
        })) && $au0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<ObjectGenericUnion>;
});
