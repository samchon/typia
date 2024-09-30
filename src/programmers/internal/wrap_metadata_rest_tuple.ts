import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";

/**
 * @internal
 */
export const wrap_metadata_rest_tuple = (rest: Metadata) => {
  const wrapper: Metadata = Metadata.initialize();
  wrapper.arrays.push(
    MetadataArray.create({
      type: MetadataArrayType.create({
        name: `...${rest.getName()}`,
        value: rest,
        nullables: [],
        recursive: false,
        index: null,
      }),
      tags: [],
    }),
  );
  return wrapper;
};
