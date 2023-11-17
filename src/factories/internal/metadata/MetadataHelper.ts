import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";

export namespace MetadataHelper {
  export const literal_to_metadata = (key: string): Metadata => {
    const metadata: Metadata = Metadata.initialize();
    metadata.constants.push(
      MetadataConstant.create({
        type: "string",
        values: [key],
      }),
    );
    return metadata;
  };
}
