import ts from "typescript";

import { $clone } from "../../../functional/$clone";

import { IMetadataTypeTag } from "../../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";
import { iterate_metadata } from "./iterate_metadata";
import { iterate_metadata_array } from "./iterate_metadata_array";
import { iterate_metadata_type_tags } from "./iterate_metadata_type_tags";

export const iterate_metadata_intersection =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (
        meta: Metadata,
        type: ts.Type,
        resolved: boolean,
        aliased: boolean,
    ): boolean => {
        if (!type.isIntersection()) return false;
        else if (
            type.types.every(
                (child) =>
                    (child.getFlags() & ts.TypeFlags.Object) !== 0 &&
                    !checker.isArrayType(child) &&
                    !checker.isTupleType(child),
            )
        )
            return false;

        // COSTRUCT FAKE METADATA LIST
        const fakeCollection: MetadataCollection = new MetadataCollection();
        const children: Metadata[] = [
            ...new Map(
                type.types.map((t) => {
                    const m: Metadata = explore_metadata(checker)({
                        ...options,
                        absorb: true,
                    })(fakeCollection)(t, resolved);
                    return [m.getName(), m] as const;
                }),
            ).values(),
        ];

        // ONLY ONE CHILD AFTER REMOVING DUPLICATES
        if (children.length === 1) {
            iterate_metadata(checker)(options)(collection)(
                meta,
                type.types[0]!,
                resolved,
                aliased,
            );
            return true;
        }

        // VALIDATE EACH TYPES
        const individuals: (readonly [Metadata, number])[] = children
            .map((child, i) => [child, i] as const)
            .filter(
                ([c]) =>
                    c.size() === 1 &&
                    (c.atomics.length === 1 || c.arrays.length === 1),
            );
        const constants: Metadata[] = children.filter(
            (m) =>
                m.size() ===
                m.constants
                    .map((c) => c.values.length)
                    .reduce((a, b) => a + b, 0) +
                    m.templates.length,
        );
        const objects: Metadata[] = children.filter(
            (c) =>
                c.nullable === false &&
                c.isRequired() === true &&
                c.objects.length &&
                c.objects.length === c.size() &&
                c.objects.every((o) =>
                    o.properties.every((p) => p.value.optional),
                ),
        );
        const atomics: Set<"boolean" | "bigint" | "number" | "string"> =
            new Set(
                individuals.map(([c]) => c.atomics.map((a) => a.type)).flat(),
            );
        const arrays: Set<string> = new Set(
            individuals.map(([c]) => c.arrays.map((a) => a.type.name)).flat(),
        );

        // ESCAPE WHEN ONLY CONSTANT TYPES EXIST
        if (
            atomics.size + arrays.size > 1 ||
            individuals.length + objects.length + constants.length !==
                children.length
        )
            throw new Error(message(children));
        else if (atomics.size === 0 && arrays.size === 0 && constants.length) {
            for (const m of constants) {
                for (const tpl of m.templates)
                    ArrayUtil.add(
                        meta.templates,
                        tpl,
                        (a, b) =>
                            a.map((ab) => ab.getName()).join(" | ") ===
                            b.map((bb) => bb.getName()).join(" | "),
                    );
                for (const c of m.constants) {
                    const oldbie = meta.constants.find(
                        (o) => o.type === c.type,
                    );
                    if (oldbie)
                        for (const elem of c.values)
                            ArrayUtil.add(
                                oldbie.values,
                                elem,
                                (a, b) => a === b,
                            );
                    else meta.constants.push($clone(c));
                }
            }
            return true;
        }

        // RE-GENERATE TYPE
        const target: "boolean" | "bigint" | "number" | "string" | "array" =
            atomics.size ? atomics.values().next().value : "array";
        if (
            target === "boolean" ||
            target === "bigint" ||
            target === "number" ||
            target === "string"
        )
            ArrayUtil.add(
                meta.atomics,
                MetadataAtomic.create({
                    type: atomics.values().next().value as "string",
                    tags: [],
                }),
                (a, b) => a.type === b.type,
            );
        else if (target === "array") {
            const name: string = arrays.values().next().value;
            if (!meta.arrays.some((a) => a.type.name === name)) {
                iterate_metadata_array(checker)(options)(collection)(
                    meta,
                    type.types[
                        individuals.find((i) => i[0].arrays.length === 1)![1]
                    ]!,
                );
            }
        }

        // ASSIGN TAGS
        if (objects.length && target !== "boolean") {
            const tags: IMetadataTypeTag[] = iterate_metadata_type_tags(target)(
                objects.map((om) => om.objects).flat(),
            );
            if (tags.length)
                if (target === "array") meta.arrays.at(-1)!.tags.push(tags);
                else
                    meta.atomics
                        .find((a) => a.type === target)!
                        .tags.push(tags);
        }
        return true;
    };

const message = (children: Metadata[]) =>
    `Error on typia.MetadataFactory.analyze(): nonsensible intersection type detected - ${children
        .map((c) => c.getName())
        .join(" & ")}.`;
