import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";
import { MetadataConstantValue } from "../../../schemas/metadata/MetadataConstantValue";

export namespace MetadataHelper {
  export const literal_to_metadata = (key: string): Metadata => {
    const metadata: Metadata = Metadata.initialize();
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
