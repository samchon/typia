import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union = (
  props: IMetadataIteratorProps,
): boolean => {
  if (!props.type.isUnion()) return false;
  props.type.types.forEach((t) =>
    iterate_metadata({
      ...props,
      type: t,
      explore: {
        ...props.explore,
        aliased: false,
      },
    }),
  );
  return true;
};
