import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";
import { MetadataConstantValue } from "../../../schemas/metadata/MetadataConstantValue";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";

export namespace MetadataHelper {
  export const literal_to_metadata = (key: string): MetadataSchema => {
    const metadata: MetadataSchema = MetadataSchema.initialize();
    metadata.constants.push(
      MetadataConstant.create({
        type: "string",
        values: [
          MetadataConstantValue.create({
            value: key,
            tags: [],
          }),
        ],
      }),
    );
    return metadata;
  };
}
