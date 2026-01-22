import { OpenApi } from "../../OpenApi";
import { Escaper } from "../Escaper";
import { OpenApiTypeChecker } from "../OpenApiTypeChecker";

export namespace JsonDescriptionUtil {
  export const cascade = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IReference;
    escape: boolean;
  }): string | undefined => {
    const accessors: string[] = props.schema.$ref
      .split(props.prefix)[1]
      .split(".");
    const pReferences: IParentReference[] = accessors
      .slice(0, props.escape ? accessors.length : accessors.length - 1)
      .map((_, i, array) => array.slice(0, i + 1).join("."))
      .map((key) => ({
        key,
        description: props.components.schemas?.[key]?.description,
      }))
      .reverse()
      .filter(
        (schema, i): schema is IParentReference =>
          i === 0 || !!schema?.description,
      );
    if (!props.schema.description?.length && pReferences.length === 0)
      return undefined;
    return [
      ...(!!props.schema.description?.length ? [props.schema.description] : []),
      ...pReferences.map((pRef, i) =>
        pRef.description === undefined
          ? `Current Type: {@link ${pRef.key}}`
          : `Description of the ${i === 0 && props.escape ? "current" : "parent"} {@link ${pRef.key}} type:\n\n` +
            pRef.description
              .split("\n")
              .map((str) => `> ${str}`)
              .join("\n"),
      ),
    ].join("\n\n------------------------------\n\n");
  };

  export const take = (o: OpenApi.IJsonSchema.IObject): string | undefined => {
    const result: string = [
      ...(!!o.description?.length ? [o.description] : []),
      ...Object.entries(o.properties ?? {})
        .filter(
          ([_key, value]) =>
            OpenApiTypeChecker.isReference(value) &&
            !!value.description?.length,
        )
        .map(
          ([key, value]) =>
            `### Description of {@link ${Escaper.variable(key) ? key : JSON.stringify(key)}} property:\n\n` +
            (value.description ?? "")
              .split("\n")
              .map((str) => `> ${str}`)
              .join("\n"),
        ),
    ].join("\n\n");
    return !!result.length ? result : undefined;
  };
}

interface IParentReference {
  key: string;
  description: string | undefined;
}
