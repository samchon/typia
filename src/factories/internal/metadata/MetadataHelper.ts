import { Metadata } from "../../../schemas/metadata/Metadata";

export namespace MetadataHelper {
    export const literal_to_metadata = (key: string): Metadata => {
        const metadata: Metadata = Metadata.initialize();
        metadata.constants.push({
            type: "string",
            values: [key],
        });
        return metadata;
    };
}
