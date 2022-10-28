import benchmark from "benchmark";

import TSON, { TypeGuardError } from "../../src";
import { ObjectSimple } from "../structures/ObjectSimple";

const right: ObjectSimple = ObjectSimple.generate();
const wrong: ObjectSimple = (() => {
    const obj: ObjectSimple = ObjectSimple.generate();
    obj.pivot.z = null!;
    return obj;
})();

const predicate = (
    exact: boolean,
    closure: () => Omit<TSON.TypeGuardError.IProps, "method">,
) =>
    exact ? null : new TSON.TypeGuardError({ ...closure(), method: "exact" });

const direct = TSON.createAssertStringify<ObjectSimple>();
const logic = (input: ObjectSimple) => {
    const $ao = [
        (input: ObjectSimple.IPoint3D, path: string) =>
            predicate("object" === typeof input && null !== input, () => ({
                path: path,
                expected: "ObjectSimple.IPoin3D",
                value: input,
            })) ||
            predicate("number" === typeof input.x, () => ({
                path: path + ".x",
                expected: "number",
                value: input.x,
            })) ||
            predicate("number" === typeof input.y, () => ({
                path: path + ".y",
                expected: "number",
                value: input.y,
            })) ||
            predicate("number" === typeof input.z, () => ({
                path: path + ".z",
                expected: "number",
                value: input.z,
            })),
        (input: ObjectSimple.IBox3D, path: string) =>
            predicate("object" === typeof input && null !== input, () => ({
                path: path,
                expected: "ObjectSimple.IBox3D",
                value: input,
            })) ||
            $ao[0](input.pivot, path + ".pivot") ||
            $ao[0](input.position, path + ".position") ||
            $ao[0](input.rotate, path + ".rotation") ||
            $ao[0](input.scale, path + ".scale"),
    ] as const;

    const error = $ao[1](input, "$input");
    if (null !== error) throw error;
    return input;
};
const condition = (input: ObjectSimple) => {
    const $ao = [
        (input: ObjectSimple.IPoint3D, path: string) => {
            if ("object" !== typeof input || null === input)
                throw new TSON.TypeGuardError({
                    path: path,
                    expected: "ObjectSimple.IPoin3D",
                    value: input,
                    method: "exact",
                });
            if ("number" !== typeof input.x)
                throw new TSON.TypeGuardError({
                    path: path + ".x",
                    expected: "number",
                    value: input.x,
                    method: "exact",
                });
            if ("number" !== typeof input.y)
                throw new TSON.TypeGuardError({
                    path: path + ".y",
                    expected: "number",
                    value: input.y,
                    method: "exact",
                });
            if ("number" !== typeof input.z)
                throw new TSON.TypeGuardError({
                    path: path + ".z",
                    expected: "number",
                    value: input.z,
                    method: "exact",
                });
            return null;
        },
        (input: ObjectSimple.IBox3D, path: string) => {
            if ("object" !== typeof input || null === input)
                throw new TSON.TypeGuardError({
                    path: path,
                    expected: "ObjectSimple.IBox3D",
                    value: input,
                    method: "exact",
                });
            let error: TypeGuardError | null = null;
            if (null !== (error = $ao[0](input.pivot, path + ".pivot")))
                return error;
            if (null !== (error = $ao[0](input.rotate, path + ".rotation")))
                return error;
            if (null !== (error = $ao[0](input.scale, path + ".scale")))
                return error;
            if (null !== (error = $ao[0](input.position, path + ".position")))
                return error;
            return null;
        },
    ] as const;

    const error = $ao[1](input, "$input");
    if (null !== error) throw error;
    return input;
};

const suite: benchmark.Suite = new benchmark.Suite();

suite.add("is", () => TSON.is(right));
suite.add("direct iterate", () => TSON.assertType(right));
suite.add("direct throw", () => {
    try {
        direct(wrong);
    } catch {}
});

suite.add("logic iterate", () => logic(right));
suite.add("logic throw", () => {
    try {
        logic(wrong);
    } catch {}
});

suite.add("condition iterate", () => condition(right));
suite.add("condition throw", () => {
    try {
        condition(wrong);
    } catch {}
});

suite.run();

suite.map((elem: benchmark) => {
    console.log(elem.name + "\t" + Math.round(elem.count / elem.times.elapsed));
});
