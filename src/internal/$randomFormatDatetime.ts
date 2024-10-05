import { $randomInteger } from "./$randomInteger";

export const $randomFormatDatetime = (props: {
  minimum?: number;
  maximum?: number;
}) =>
  new Date(
    $randomInteger({
      minimum: props.minimum ?? 0,
      maximum:
        (props.maximum ?? props.minimum === undefined)
          ? Date.now()
          : props.minimum + 365 * 24 * 60 * 60 * 1_000,
    }),
  ).toISOString();
