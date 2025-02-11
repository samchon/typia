// import ts from "typescript";
import { IMetadataTypeTag } from "../../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataTypeTagFactory } from "../../MetadataTypeTagFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_intersection = (
  props: IMetadataIteratorProps,
): boolean => {
  if (props.intersected === true) return false;
  else if (props.type.isIntersection() === false) return false;

  // CONSTRUCT FAKE METADATA LIST
  const commit: MetadataCollection = props.collection.clone();
  props.collection["options"] = undefined;

  const fakeErrors: MetadataFactory.IError[] = [];
  const children: Metadata[] = props.type.types.map((t) =>
    explore_metadata({
      ...props,
      options: {
        ...props.options,
        absorb: true,
        functional: false,
      },
      collection: props.collection,
      errors: fakeErrors,
      type: t,
      explore: {
        ...props.explore,
        aliased: false,
      },
      intersected: false,
    }),
  );

  // ERROR OR ANY TYPE CASE
  const escape = (out: boolean) => {
    Object.assign(props.collection, commit);
    return out;
  };
  if (fakeErrors.length) {
    props.errors.push(...fakeErrors);
    return escape(true);
  } else if (children.length === 0) return escape(false);
  else if (children.some((m) => m.any === true || m.size() === 0))
    return escape(false);

  // PREPARE MEATDATAS AND TAGS
  const indexes: number[] = [];
  const metadatas: Metadata[] = [];
  const tagObjects: MetadataObjectType[] = [];
  children.forEach((child, i) => {
    if (
      child.size() === 1 &&
      child.objects.length === 1 &&
      MetadataTypeTagFactory.is(child.objects[0]!.type)
    )
      tagObjects.push(child.objects[0]!.type);
    else {
      indexes.push(i);
      metadatas.push(child);
    }
  });

  const nonsensible = () => {
    props.errors.push({
      name: children.map((c) => c.getName()).join(" & "),
      explore: { ...props.explore },
      messages: ["nonsensible intersection"],
    });
    return escape(true);
  };

  // NO METADATA CASE
  if (metadatas.length === 0)
    if (tagObjects.length !== 0) {
      props.errors.push({
        name: children.map((c) => c.getName()).join(" & "),
        explore: { ...props.explore },
        messages: ["type tag cannot be standalone"],
      });
      return escape(true);
    } else return escape(false);
  // ONLY OBJECTS CASE
  else if (
    metadatas.every((m) => m.objects.length === 1) &&
    tagObjects.length === 0
  )
    return escape(false);
  else if (metadatas.length !== 1) {
    const indexes: number[] = metadatas
      .map((m, i) =>
        m.size() === 1 &&
        m.objects.length === 1 &&
        (m.objects[0]!.type.properties.length === 0 ||
          m.objects[0]!.type.properties.every((p) => p.value.optional === true))
          ? i
          : null,
      )
      .filter((i) => i !== null);
    if (indexes.length && metadatas.length !== indexes.length)
      for (const i of indexes.reverse()) metadatas.splice(i, 1);
    else return nonsensible();
  } else if (metadatas.some((m) => m.size() !== 1)) return nonsensible();

  const candidates: Map<string, string> = new Map();
  const assigners: Array<(tags: IMetadataTypeTag[]) => void> = [];
  for (const meta of metadatas) {
    for (const a of meta.atomics) {
      candidates.set(a.type, a.type);
      assigners.push((tags) =>
        props.metadata.atomics
          .find((atom) => atom.type === a.type)
          ?.tags.push(tags),
      );
    }
    for (const c of meta.constants)
      for (const v of c.values) {
        candidates.set(c.type, c.type);
        assigners.push((tags) =>
          props.metadata.constants
            .find((constant) => constant.type === c.type)
            ?.values.find((value) => value === v)
            ?.tags?.push(tags),
        );
      }
    for (const t of meta.templates) {
      candidates.set("string", "string");
      assigners.push((tags) =>
        props.metadata.templates
          .find((tpl) => tpl.getBaseName() === t.getBaseName())
          ?.tags.push(tags),
      );
    }
    if (meta.objects.length) {
      candidates.set("object", "object");
      assigners.push((tags) => props.metadata.objects.at(-1)?.tags.push(tags));
    }
    if (meta.arrays.length) {
      candidates.set("array", "array");
      assigners.push((tags) => props.metadata.arrays.at(-1)?.tags.push(tags));
    }
    if (meta.tuples.length) candidates.set("invalid", "tuple");
    for (const n of meta.natives) {
      candidates.set(`native::${n.name}`, "object");
      assigners.push((tags) =>
        props.metadata.natives
          .find((native) => native.name === n.name)
          ?.tags.push(tags),
      );
    }
    for (const s of meta.sets) {
      candidates.set(`set::${s.value.getName()}`, "object");
      assigners.push((tags) =>
        props.metadata.sets
          .find((set) => set.value.getName() === s.value.getName())
          ?.tags.push(tags),
      );
    }
    for (const e of meta.maps) {
      candidates.set(`map::${e.key.getName()}::${e.value.getName()}`, "object");
      assigners.push((tags) =>
        props.metadata.maps
          .find(
            (map) =>
              map.key.getName() === e.key.getName() &&
              map.value.getName() === e.value.getName(),
          )
          ?.tags.push(tags),
      );
    }
  }
  if (
    candidates.size !== 1 ||
    candidates.has("nonsensible")
    // ||
    // (candidates.size !== 1 &&
    //   Array.from(candidates.keys()).some((v) => v !== "object"))
  )
    return nonsensible();

  const tags: IMetadataTypeTag[] = MetadataTypeTagFactory.analyze({
    errors: props.errors,
    type: candidates.values().next().value as "string",
    objects: tagObjects,
    explore: props.explore,
  });
  Object.assign(props.collection, commit);
  iterate_metadata({
    ...props,
    type: props.type.types[indexes[0]!]!,
    options: {
      ...props.options,
      functional: false,
    },
    explore: {
      ...props.explore,
      aliased: false,
      escaped: false,
    },
    intersected: true,
  });
  if (tags.length) assigners.forEach((fn) => fn(tags));
  return true;
};
