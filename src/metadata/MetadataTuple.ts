import { ClassProperties } from "../typings/ClassProperties";

import { IMetadataTuple } from "./IMetadataTuple";
import { Metadata } from "./Metadata";

export class MetadataTuple {
    public readonly name: string;
    public readonly elements: Metadata[];

    public readonly index: number;
    public readonly recursive: boolean;
    public readonly nullables: boolean[];

    /**
     * @internal
     */
    private constructor(props: ClassProperties<MetadataTuple>) {
        this.name = props.name;
        this.elements = props.elements;
        this.index = props.index;
        this.recursive = props.recursive;
        this.nullables = props.nullables;
    }

    /**
     * @internal
     */
    public static _From_without_elements(
        props: Omit<IMetadataTuple, "elements">,
    ): MetadataTuple {
        return this.create({
            name: props.name,
            index: props.index,
            elements: null!,
            recursive: props.recursive,
            nullables: props.nullables.slice(),
        });
    }

    public static create(props: ClassProperties<MetadataTuple>): MetadataTuple {
        return new MetadataTuple(props);
    }

    public toJSON(): IMetadataTuple {
        return {
            name: this.name,
            index: this.index,
            elements: this.elements.map((elem) => elem.toJSON()),
            recursive: this.recursive,
            nullables: this.nullables.slice(),
        };
    }
}
