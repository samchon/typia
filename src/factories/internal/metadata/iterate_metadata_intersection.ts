import ts from "typescript";

import { IMetadataTypeTag } from "../../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";
import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";
import { MetadataConstantValue } from "../../../schemas/metadata/MetadataConstantValue";
import { MetadataTemplate } from "../../../schemas/metadata/MetadataTemplate";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TypePredicator } from "../../../utils/TypePredicator";

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
    if (TypePredicator.isIntersection(type) === false) return false;
    if (
      // ONLY OBJECT TYPED INTERSECTION
      type.types.every(
        (child) =>
          (child.flags & ts.TypeFlags.Object) !== 0 &&
          !checker.isArrayType(child) &&
          !checker.isTupleType(child),
      )
    )
      return false;

    // COSTRUCT FAKE METADATA LIST
    const fakeCollection: MetadataCollection = collection.clone();
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
    } else if (children.every((c) => c.objects.length === c.size()))
      // ONLY OBJECT TYPED INTERSECTION (DETAILED)
      return false;

    // VALIDATE EACH TYPES
    const nonsensible = () => {
      errors.push({
        name: children.map((c) => c.getName()).join(" & "),
        explore: { ...explore },
        messages: ["nonsensible intersection"],
      });
      return true;
    };
    const individuals: (readonly [Metadata, number])[] = children
      .map((child, i) => [child, i] as const)
      .filter(
        ([c]) =>
          (c.size() === 1 &&
            (c.atomics.length === 1 ||
              (c.constants.length === 1 &&
                c.constants[0]!.values.length === 1) ||
              c.arrays.length === 1)) ||
          c.templates.length === 1,
      );
    if (individuals.length !== 1) return nonsensible();

    const objects: Metadata[] = children.filter(
      (c) =>
        c.nullable === false &&
        c.isRequired() === true &&
        c.objects.length &&
        c.objects.length === c.size() &&
        c.objects.every((o) => o.properties.every((p) => p.value.optional)),
    );
    const arrays: Set<string> = new Set(
      individuals.map(([c]) => c.arrays.map((a) => a.type.name)).flat(),
    );
    const atomics: Set<"boolean" | "bigint" | "number" | "string"> = new Set(
      individuals.map(([c]) => [...c.atomics.map((a) => a.type)]).flat(),
    );
    const constants: Metadata[] = individuals
      .filter((i) => i[0].constants.length === 1)
      .map(([m]) => m);
    const templates: Metadata[] = individuals
      .filter((i) => i[0].templates.length === 1)
      .map(([m]) => m);

    // ESCAPE WHEN ONLY CONSTANT TYPES EXIST
    if (
      atomics.size + constants.length + arrays.size + templates.length > 1 ||
      individuals.length + objects.length !== children.length
    )
      return nonsensible();

    // RE-GENERATE TYPE
    const target: "boolean" | "bigint" | "number" | "string" | "array" =
      arrays.size
        ? "array"
        : atomics.size
          ? atomics.values().next().value
          : constants.length
            ? constants[0]!.constants[0]!.type
            : "string";
    if (target === "array") {
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
    } else if (atomics.size)
      ArrayUtil.add(
        meta.atomics,
        MetadataAtomic.create({
          type: atomics.values().next().value as "string",
          tags: [],
        }),
        (a, b) => a.type === b.type,
      );
    else if (constants.length)
      ArrayUtil.take(
        ArrayUtil.take(
          meta.constants,
          (o) => o.type === target,
          () =>
            MetadataConstant.create({
              type: target,
              values: [],
            }),
        ).values,
        (o) => o.value === constants[0]!.constants[0]!.values[0]!.value,
        () =>
          MetadataConstantValue.create({
            value: constants[0]!.constants[0]!.values[0]!.value,
            tags: [],
          }),
      );
    else if (templates.length)
      ArrayUtil.take(
        meta.templates,
        (o) => o.getBaseName() === templates[0]!.templates[0]!.getBaseName(),
        () =>
          MetadataTemplate.create({
            row: templates[0]!.templates[0]!.row,
            tags: [],
          }),
      );

    // ASSIGN TAGS
    if (objects.length) {
      const tags: IMetadataTypeTag[] = MetadataTypeTagFactory.analyze(errors)(
        target,
      )(objects.map((om) => om.objects).flat(), explore);
      if (tags.length)
        if (target === "array") meta.arrays.at(-1)!.tags.push(tags);
        else if (atomics.size)
          meta.atomics.find((a) => a.type === target)!.tags.push(tags);
        else if (constants.length) {
          const constant: MetadataConstant = meta.constants.find(
            (c) => c.type === target,
          )!;
          const value: MetadataConstantValue = constant.values.find(
            (v) => v.value === constants[0]!.constants[0]!.values[0]!.value,
          )!;
          value.tags ??= [];
          value.tags.push(tags);
        } else if (templates.length) {
          const template: MetadataTemplate = meta.templates.find(
            (t) =>
              t.getBaseName() === templates[0]!.templates[0]!.getBaseName(),
          )!;
          template.tags ??= [];
          template.tags.push(tags);
        }
    }
    return true;
  };
