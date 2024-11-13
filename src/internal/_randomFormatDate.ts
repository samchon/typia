import { _randomInteger } from "./_randomInteger";

export const _randomFormatDate = (props?: {
  minimum?: number;
  maximum?: number;
}) =>
  new Date(
    _randomInteger({
      type: "integer",
      minimum: props?.minimum ?? 0,
      maximum:
        (props?.maximum ?? props?.minimum === undefined)
          ? Date.now()
          : props.minimum + 365 * 24 * 60 * 60 * 1_000,
    }),
  )
    .toISOString()
    .substring(0, 10);
