type IStringEncodingSchema = {
  format?: string;
  contentEncoding?: string;
  contentMediaType?: string;
  "x-jsonschema-contentEncoding"?: string;
  "x-jsonschema-contentMediaType"?: string;
  [key: string]: unknown;
};

/** @internal */
export namespace OpenApiStringEncodingConverter {
  const CONTENT_ENCODING = "x-jsonschema-contentEncoding";
  const CONTENT_MEDIA_TYPE = "x-jsonschema-contentMediaType";

  export const isRegisteredExtension = (key: string): boolean =>
    key === CONTENT_ENCODING || key === CONTENT_MEDIA_TYPE;

  export const upgrade = <Schema extends object>(schema: Schema): Schema => {
    const input = schema as Schema & IStringEncodingSchema;
    const {
      contentEncoding: directEncoding,
      contentMediaType: directMediaType,
      [CONTENT_ENCODING]: extensionEncoding,
      [CONTENT_MEDIA_TYPE]: extensionMediaType,
      ...rest
    } = input;
    const contentEncoding: string | undefined =
      directEncoding ?? extensionEncoding;
    const contentMediaType: string | undefined =
      directMediaType ?? extensionMediaType;
    const base64: boolean =
      contentEncoding === "base64" &&
      (input.format === undefined || input.format === "byte");
    return {
      ...rest,
      format: base64 ? "byte" : input.format,
      contentEncoding: base64 ? undefined : contentEncoding,
      contentMediaType,
      ...(directEncoding !== undefined &&
      extensionEncoding !== undefined &&
      directEncoding !== extensionEncoding
        ? { [CONTENT_ENCODING]: extensionEncoding }
        : {}),
      ...(directMediaType !== undefined &&
      extensionMediaType !== undefined &&
      directMediaType !== extensionMediaType
        ? { [CONTENT_MEDIA_TYPE]: extensionMediaType }
        : {}),
    } as Schema;
  };

  export const downgradeV3_1 = <Schema extends object>(
    schema: Schema,
  ): Schema => {
    const input = schema as Schema & IStringEncodingSchema;
    const { contentEncoding, format, ...rest } = input;
    const base64: boolean =
      format === "byte" &&
      (contentEncoding === undefined || contentEncoding === "base64");
    return {
      ...rest,
      format: base64 ? undefined : format,
      contentEncoding: base64 ? "base64" : contentEncoding,
    } as Schema;
  };

  export const downgradeV3 = <Schema extends object>(
    schema: Schema,
  ): Schema => {
    const input = schema as Schema & IStringEncodingSchema;
    const { contentEncoding, contentMediaType, format, ...rest } = input;
    const base64: boolean =
      contentEncoding === "base64" &&
      (format === undefined || format === "byte");
    return {
      ...rest,
      format: format ?? (base64 ? "byte" : undefined),
      [CONTENT_ENCODING]: base64 ? undefined : contentEncoding,
      [CONTENT_MEDIA_TYPE]: contentMediaType,
    } as Schema;
  };
}
