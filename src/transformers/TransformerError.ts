import { MetadataFactory } from "../factories/MetadataFactory";

import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

import { Escaper } from "../utils/Escaper";

export class TransformerError extends Error {
  public readonly code: string;

  public constructor(props: TransformerError.IProps) {
    super(props.message);
    this.code = props.code;

    // INHERITANCE POLYFILL
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;
  }
}
export namespace TransformerError {
  export interface IProps {
    code: string;
    message: string;
  }

  export const from = (props: {
    code: string;
    errors: MetadataFactory.IError[];
  }): TransformerError => {
    const body: string = props.errors
      .map((e) => {
        const subject: string =
          e.explore.object === null
            ? ""
            : join(e.explore.object)(e.explore.property);
        const middle: string = e.explore.parameter
          ? `(parameter: ${JSON.stringify(e.explore.parameter)})`
          : e.explore.output
            ? "(return type)"
            : "";
        const type: string = `${subject.length ? `${subject}: ` : ""}${e.name}`;
        return `- ${type}${middle}\n${e.messages
          .map((msg) => `  - ${msg}`)
          .join("\n")}`;
      })
      .join("\n\n");
    return new TransformerError({
      code: props.code,
      message: `unsupported type detected\n\n${body}`,
    });
  };

  const join =
    (object: MetadataObjectType) => (key: string | object | null) => {
      if (key === null) return object.name;
      else if (typeof key === "object") return `${object.name}[key]`;
      else if (Escaper.variable(key)) return `${object.name}.${key}`;
      return `${object.name}[${JSON.stringify(key)}]`;
    };
}
