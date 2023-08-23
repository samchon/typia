import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataEscaped } from "./IMetadataEscaped";
import { Metadata } from "./Metadata";

export class MetadataEscaped {
    public readonly original: Metadata;
    public readonly returns: Metadata;

    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataEscaped>) {
        this.original = props.original;
        this.returns = props.returns;
    }

    /**
     * @internal
     */
    public static _From(
        props: IMetadataEscaped,
        dict: IMetadataDictionary,
    ): MetadataEscaped {
        return this.create({
            original: Metadata._From(props.original, dict),
            returns: Metadata._From(props.returns, dict),
        });
    }

    /**
     * @internal
     */
    public static create(
        props: ClassProperties<MetadataEscaped>,
    ): MetadataEscaped {
        return new MetadataEscaped(props);
    }

    public getName(): string {
        return this.returns.getName();
    }

    public toJSON(): IMetadataEscaped {
        return {
            original: this.original.toJSON(),
            returns: this.returns.toJSON(),
        };
    }
}
