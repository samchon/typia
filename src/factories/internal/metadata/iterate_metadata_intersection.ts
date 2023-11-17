import ts from "typescript";

import { IMetadataTypeTag } from "../../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";
import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataTypeTagFactory } from "../../MetadataTypeTagFactory";
import { explore_metadata } from "./explore_metadata";
import { iterate_metadata } from "./iterate_metadata";
import { iterate_metadata_array } from "./iterate_metadata_array";

export const iterate_metadata_intersection =
  (checker: ts.TypeChecker) =>
  (options: MetadataFactory.IOptions) =>
  (collection: MetadataCollection) =>
  (errors: MetadataFactory.IError[]) =>
  (
    meta: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
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
    const fakeErrors: MetadataFactory.IError[] = [];
    const children: Metadata[] = [
      ...new Map(
        type.types.map((t) => {
          const m: Metadata = explore_metadata(checker)({
            ...options,
            absorb: true,
          })(fakeCollection)(fakeErrors)(t, {
            ...explore,
            aliased: false,
          });
          return [m.getName(), m] as const;
        }),
      ).values(),
    ];
    if (fakeErrors.length) {
      errors.push(...fakeErrors);
      return true;
    }

    // ONLY ONE CHILD AFTER REMOVING DUPLICATES
    if (children.length === 1) {
      iterate_metadata(checker)(options)(collection)(errors)(
        meta,
        type.types[0]!,
        explore,
      );
      return true;
    } else if (
      // ONLY OBJECT TYPES -> SPECIAL LOGIC FOR TS V5.2
      children.every((c) => c.objects.length === 1 && c.size() === 1)
    )
      return false;

    // CONSIDER BOOLEAN TYPE CASE
    const booleanLiteral: boolean | null = (() => {
      const found = children.find(
        (c) =>
          c.size() === 1 &&
          c.constants.length === 1 &&
          c.constants[0]!.type === "boolean",
      )?.constants[0]?.values[0];
      if (found === undefined) return null;
      return children.every(
        (c) =>
          c.atomics.length === 0 ||
          c.atomics.every((a) => a.type !== "boolean"),
      )
        ? (found as boolean)
        : null;
    })();
    if (booleanLiteral !== null && meta.boolean_literal_intersected_ === true) {
      (
        meta.constants.find((c) => c.type === "boolean")!.values as boolean[]
      ).push(booleanLiteral);
      return true;
    }

    // VALIDATE EACH TYPES
    const individuals: (readonly [Metadata, number])[] = children
      .map((child, i) => [child, i] as const)
      .filter(
        ([c]) =>
          c.size() === 1 &&
          (c.atomics.length === 1 ||
            (c.constants.length === 1 && c.constants[0]!.type === "boolean") ||
            c.arrays.length === 1),
      );
    const constants: Metadata[] = children.filter(
      (m) =>
        m.size() ===
          m.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) +
            m.templates.length &&
        !(m.size() === 1 && m.constants[0]!.type === "boolean"),
    );
    const objects: Metadata[] = children.filter(
      (c) =>
        c.nullable === false &&
        c.isRequired() === true &&
        c.objects.length &&
        c.objects.length === c.size() &&
        c.objects.every((o) => o.properties.every((p) => p.value.optional)),
    );
    const atomics: Set<"boolean" | "bigint" | "number" | "string"> = new Set(
      individuals
        .map(([c]) => [
          ...c.atomics.map((a) => a.type),
          ...c.constants.filter((l) => l.type === "boolean").map((l) => l.type),
        ])
        .flat(),
    );
    const arrays: Set<string> = new Set(
      individuals.map(([c]) => c.arrays.map((a) => a.type.name)).flat(),
    );

    // ESCAPE WHEN ONLY CONSTANT TYPES EXIST
    if (
      atomics.size + arrays.size > 1 ||
      individuals.length + objects.length + constants.length !== children.length
    ) {
      errors.push({
        name: children.map((c) => c.getName()).join(" & "),
        explore: { ...explore },
        messages: ["nonsensible intersection"],
      });
      return true;
    } else if (atomics.size === 0 && arrays.size === 0 && constants.length) {
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
          const oldbie = meta.constants.find((o) => o.type === c.type);
          if (oldbie)
            for (const elem of c.values)
              ArrayUtil.add(oldbie.values, elem, (a, b) => a === b);
          else meta.constants.push(MetadataConstant.create(c));
        }
      }
      return true;
    }

    // RE-GENERATE TYPE
    const target: "boolean" | "bigint" | "number" | "string" | "array" =
      booleanLiteral
        ? "boolean"
        : atomics.size
        ? atomics.values().next().value
        : "array";
    if (
      target === "boolean" ||
      target === "bigint" ||
      target === "number" ||
      target === "string"
    )
      if (booleanLiteral === null)
        ArrayUtil.add(
          meta.atomics,
          MetadataAtomic.create({
            type: atomics.values().next().value as "string",
            tags: [],
          }),
          (a, b) => a.type === b.type,
        );
      else
        ArrayUtil.take<MetadataConstant>(
          meta.constants,
          (x) => x.type === "boolean",
          () =>
            MetadataConstant.create({
              type: "boolean",
              values: [booleanLiteral],
            }),
        );
    else if (target === "array") {
      const name: string = arrays.values().next().value;
      if (!meta.arrays.some((a) => a.type.name === name)) {
        iterate_metadata_array(checker)(options)(collection)(errors)(
          meta,
          type.types[individuals.find((i) => i[0].arrays.length === 1)![1]]!,
          {
            ...explore,
            aliased: false,
            escaped: false,
          },
        );
      }
    }

    // ASSIGN TAGS
    if (objects.length) {
      const tags: IMetadataTypeTag[] = MetadataTypeTagFactory.analyze(errors)(
        target,
      )(objects.map((om) => om.objects).flat(), explore);
      if (tags.length)
        if (target === "array") meta.arrays.at(-1)!.tags.push(tags);
        else if (booleanLiteral === null)
          meta.atomics.find((a) => a.type === target)!.tags.push(tags);
        else {
          const constant: MetadataConstant = meta.constants.find(
            (c) => c.type === "boolean",
          )!;
          constant.tags ??= [];
          constant.tags.push(tags);
        }
    }
    if (booleanLiteral !== null) meta.boolean_literal_intersected_ = true;
    return true;
  };
