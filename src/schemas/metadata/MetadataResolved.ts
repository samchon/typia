import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataResolved } from "./IMetadataResolved";
import { Metadata } from "./Metadata";

export class MetadataResolved {
    public readonly original: Metadata;
    public readonly returns: Metadata;

    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataResolved>) {
        this.original = props.original;
        this.returns = props.returns;
    }

    /**
     * @internal
     */
    public static _From(
        props: IMetadataResolved,
        dict: IMetadataDictionary,
    ): MetadataResolved {
        return this.create({
            original: Metadata._From(props.original, dict),
            returns: Metadata._From(props.returns, dict),
        });
    }

    /**
     * @internal
     */
    public static create(
        props: ClassProperties<MetadataResolved>,
    ): MetadataResolved {
        return new MetadataResolved(props);
    }

    public getName(): string {
        return this.returns.getName();
    }

    public toJSON(): IMetadataResolved {
        return {
            original: this.original.toJSON(),
            returns: this.returns.toJSON(),
        };
    }
}
