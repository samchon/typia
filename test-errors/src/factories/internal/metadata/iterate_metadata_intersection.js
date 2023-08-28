"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_intersection = void 0;
const typescript_1 = __importDefault(require("typescript"));
const MetadataAtomic_1 = require("../../../schemas/metadata/MetadataAtomic");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const MetadataCollection_1 = require("../../MetadataCollection");
const MetadataTypeTagFactory_1 = require("../../MetadataTypeTagFactory");
const explore_metadata_1 = require("./explore_metadata");
const iterate_metadata_1 = require("./iterate_metadata");
const iterate_metadata_array_1 = require("./iterate_metadata_array");
const iterate_metadata_intersection = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (!type.isIntersection())
        return false;
    else if (type.types.every((child) => (child.getFlags() & typescript_1.default.TypeFlags.Object) !== 0 &&
        !checker.isArrayType(child) &&
        !checker.isTupleType(child)))
        return false;
    // COSTRUCT FAKE METADATA LIST
    const fakeCollection = new MetadataCollection_1.MetadataCollection();
    const fakeErrors = [];
    const children = [
        ...new Map(type.types.map((t) => {
            const m = (0, explore_metadata_1.explore_metadata)(checker)({
                ...options,
                absorb: true,
            })(fakeCollection)(fakeErrors)(t, {
                ...explore,
                aliased: false,
            });
            return [m.getName(), m];
        })).values(),
    ];
    if (fakeErrors.length) {
        errors.push(...fakeErrors);
        return true;
    }
    // ONLY ONE CHILD AFTER REMOVING DUPLICATES
    if (children.length === 1) {
        (0, iterate_metadata_1.iterate_metadata)(checker)(options)(collection)(errors)(meta, type.types[0], explore);
        return true;
    }
    else if (
    // ONLY OBJECT TYPES -> SPECIAL LOGIC FOR TS V5.2
    children.every((c) => c.objects.length === 1 && c.size() === 1))
        return false;
    // VALIDATE EACH TYPES
    const individuals = children
        .map((child, i) => [child, i])
        .filter(([c]) => c.size() === 1 &&
        (c.atomics.length === 1 || c.arrays.length === 1));
    const constants = children.filter((m) => m.size() ===
        m.constants
            .map((c) => c.values.length)
            .reduce((a, b) => a + b, 0) +
            m.templates.length);
    const objects = children.filter((c) => c.nullable === false &&
        c.isRequired() === true &&
        c.objects.length &&
        c.objects.length === c.size() &&
        c.objects.every((o) => o.properties.every((p) => p.value.optional)));
    const atomics = new Set(individuals.map(([c]) => c.atomics.map((a) => a.type)).flat());
    const arrays = new Set(individuals.map(([c]) => c.arrays.map((a) => a.type.name)).flat());
    // ESCAPE WHEN ONLY CONSTANT TYPES EXIST
    if (atomics.size + arrays.size > 1 ||
        individuals.length + objects.length + constants.length !==
            children.length) {
        errors.push({
            name: children.map((c) => c.getName()).join(" & "),
            explore: { ...explore },
            messages: ["nonsensible intersection"],
        });
        return true;
    }
    else if (atomics.size === 0 &&
        arrays.size === 0 &&
        constants.length) {
        for (const m of constants) {
            for (const tpl of m.templates)
                ArrayUtil_1.ArrayUtil.add(meta.templates, tpl, (a, b) => a.map((ab) => ab.getName()).join(" | ") ===
                    b.map((bb) => bb.getName()).join(" | "));
            for (const c of m.constants) {
                const oldbie = meta.constants.find((o) => o.type === c.type);
                if (oldbie)
                    for (const elem of c.values)
                        ArrayUtil_1.ArrayUtil.add(oldbie.values, elem, (a, b) => a === b);
                else
                    meta.constants.push({ ...c });
            }
        }
        return true;
    }
    // RE-GENERATE TYPE
    const target = atomics.size ? atomics.values().next().value : "array";
    if (target === "boolean" ||
        target === "bigint" ||
        target === "number" ||
        target === "string")
        ArrayUtil_1.ArrayUtil.add(meta.atomics, MetadataAtomic_1.MetadataAtomic.create({
            type: atomics.values().next().value,
            tags: [],
        }), (a, b) => a.type === b.type);
    else if (target === "array") {
        const name = arrays.values().next().value;
        if (!meta.arrays.some((a) => a.type.name === name)) {
            (0, iterate_metadata_array_1.iterate_metadata_array)(checker)(options)(collection)(errors)(meta, type.types[individuals.find((i) => i[0].arrays.length === 1)[1]], {
                ...explore,
                aliased: false,
                escaped: false,
            });
        }
    }
    // ASSIGN TAGS
    if (objects.length && target !== "boolean") {
        const tags = MetadataTypeTagFactory_1.MetadataTypeTagFactory.analyze(errors)(target)(objects.map((om) => om.objects).flat(), explore);
        if (tags.length)
            if (target === "array")
                meta.arrays.at(-1).tags.push(tags);
            else
                meta.atomics
                    .find((a) => a.type === target)
                    .tags.push(tags);
    }
    return true;
};
exports.iterate_metadata_intersection = iterate_metadata_intersection;
