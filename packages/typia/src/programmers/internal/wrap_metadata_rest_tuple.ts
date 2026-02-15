import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";

/** @internal */
export const wrap_metadata_rest_tuple = (rest: MetadataSchema) => {
  const wrapper: MetadataSchema = MetadataSchema.initialize();
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
