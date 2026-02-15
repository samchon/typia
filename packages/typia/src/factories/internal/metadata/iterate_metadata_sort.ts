import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataComponents } from "../../MetadataComponents";

export const iterate_metadata_sort = (props: {
  collection: MetadataComponents;
  metadata: MetadataSchema;
}) => {
  const visited: Set<MetadataSchema> = new Set();
  const next = (metadata: MetadataSchema) =>
    iterate({
      visited,
      collection: props.collection,
      metadata,
    });
  for (const array of props.collection.arrays()) next(array.value);
  for (const tuple of props.collection.tuples())
    for (const element of tuple.elements) next(element);
  for (const object of props.collection.objects())
    for (const property of object.properties) next(property.value);
  next(props.metadata);
};

const iterate = (props: {
  visited: Set<MetadataSchema>;
  collection: MetadataComponents;
  metadata: MetadataSchema;
}) => {
  if (props.visited.has(props.metadata)) return;
  props.visited.add(props.metadata);

  const next = (metadata: MetadataSchema) =>
    iterate({
      ...props,
      metadata,
    });

  // ITERATE CHILDREN
  for (const map of props.metadata.maps) next(map.value);
  for (const set of props.metadata.sets) next(set.value);
  if (props.metadata.escaped !== null) next(props.metadata.escaped.returns);
  if (props.metadata.rest !== null) next(props.metadata.rest);

  // SORT OBJECTS
  if (props.metadata.objects.length > 1) {
    props.metadata.objects.sort((x, y) =>
      MetadataObjectType.covers(x.type, y.type)
        ? -1
        : MetadataObjectType.covers(y.type, x.type)
          ? 1
          : 0,
    );
    props.metadata.union_index = props.collection.getUnionIndex(props.metadata);
  }

  // SORT ARRAYS AND TUPLES
  if (props.metadata.arrays.length > 1)
    props.metadata.arrays.sort((x, y) =>
      MetadataSchema.covers(x.type.value, y.type.value)
        ? -1
        : MetadataSchema.covers(y.type.value, x.type.value)
          ? 1
          : 0,
    );
  if (props.metadata.tuples.length > 1)
    props.metadata.tuples.sort((x, y) => {
      const xt = MetadataSchema.initialize();
      const yt = MetadataSchema.initialize();

      xt.tuples.push(x);
      yt.tuples.push(y);

      return MetadataSchema.covers(xt, yt)
        ? -1
        : MetadataSchema.covers(yt, xt)
          ? 1
          : 0;
    });

  // SORT CONSTANT VALUES
  for (const constant of props.metadata.constants)
    if (constant.type === "string") constant.values.sort();
    else if (constant.type === "number")
      constant.values.sort((a, b) => (a.value as number) - (b.value as number));
    else if (constant.type === "bigint")
      constant.values.sort((a, b) =>
        (a.value as bigint) < (b.value as bigint) ? -1 : 1,
      );
    else constant.values.sort((a, _b) => (a.value === false ? -1 : 1));
};
