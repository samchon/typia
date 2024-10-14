import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";
import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata_comment_tags } from "./iterate_metadata_comment_tags";

export const iterate_metadata_collection = (props: {
  errors: MetadataFactory.IError[];
  collection: MetadataCollection;
}): void => {
  for (const array of props.collection.arrays())
    if (array.recursive === null)
      props.collection.setArrayRecursive(
        array,
        isArrayRecursive({
          visited: new Set(),
          array,
          metadata: array.value,
        }),
      );
  for (const tuple of props.collection.tuples())
    if (tuple.recursive === null) {
      const visited: Set<Metadata> = new Set();
      props.collection.setTupleRecursive(
        tuple,
        tuple.elements.some((e) =>
          isTupleRecursive({
            visited,
            tuple,
            metadata: e,
          }),
        ),
      );
    }
  for (const object of props.collection.objects()) {
    iterate_metadata_comment_tags({
      errors: props.errors,
      object,
    });
    if (object.recursive === null) {
      const visited: Set<Metadata> = new Set();
      props.collection.setObjectRecursive(
        object,
        object.properties.some((p) =>
          isObjectRecursive({
            visited,
            object,
            metadata: p.value,
          }),
        ),
      );
    }
  }
};

const isArrayRecursive = (props: {
  visited: Set<Metadata>;
  array: MetadataArrayType;
  metadata: Metadata;
}): boolean => {
  if (props.visited.has(props.metadata)) return false;
  props.visited.add(props.metadata);

  const next = (metadata: Metadata): boolean =>
    isArrayRecursive({
      ...props,
      metadata,
    });
  return (
    props.metadata.arrays.some(
      (a) => a.type === props.array || next(a.type.value),
    ) ||
    props.metadata.aliases.some((alias) => next(alias.type.value)) ||
    props.metadata.tuples.some(
      (t) => !t.type.recursive && t.type.elements.some(next),
    ) ||
    props.metadata.maps.some((m) => next(m.value)) ||
    props.metadata.sets.some((s) => next(s.value)) ||
    (props.metadata.escaped !== null && next(props.metadata.escaped.returns)) ||
    (props.metadata.rest !== null && next(props.metadata.rest))
  );
};

const isTupleRecursive = (props: {
  visited: Set<Metadata>;
  tuple: MetadataTupleType;
  metadata: Metadata;
}): boolean => {
  if (props.visited.has(props.metadata)) return false;
  props.visited.add(props.metadata);

  const next = (metadata: Metadata): boolean =>
    isTupleRecursive({
      ...props,
      metadata,
    });
  return (
    props.metadata.tuples.some(
      (t) => t.type === props.tuple || t.type.elements.some(next),
    ) ||
    props.metadata.arrays.some(
      (a) => !a.type.recursive && next(a.type.value),
    ) ||
    props.metadata.maps.some((m) => next(m.value)) ||
    props.metadata.sets.some((s) => next(s.value)) ||
    props.metadata.aliases.some((alias) => next(alias.type.value)) ||
    (props.metadata.escaped !== null && next(props.metadata.escaped.returns)) ||
    (props.metadata.rest !== null && next(props.metadata.rest))
  );
};

const isObjectRecursive = (props: {
  visited: Set<Metadata>;
  object: MetadataObjectType;
  metadata: Metadata;
}): boolean => {
  if (props.visited.has(props.metadata)) return false;
  props.visited.add(props.metadata);

  const next = (metadata: Metadata): boolean =>
    isObjectRecursive({
      ...props,
      metadata,
    });
  return (
    props.metadata.objects.some(
      (o) =>
        props.object === o.type ||
        o.type.properties.some((prop) => next(prop.value)),
    ) ||
    props.metadata.aliases.some((alias) => next(alias.type.value)) ||
    props.metadata.arrays.some(
      (array) => !array.type.recursive && next(array.type.value),
    ) ||
    props.metadata.tuples.some(
      (tuple) => !tuple.type.recursive && tuple.type.elements.some(next),
    ) ||
    props.metadata.maps.some((map) => next(map.value)) ||
    props.metadata.sets.some((set) => next(set.value)) ||
    (props.metadata.escaped !== null && next(props.metadata.escaped.returns)) ||
    (props.metadata.rest !== null && next(props.metadata.rest))
  );
};
