import { _randomInteger } from "../_randomInteger";

export interface __IEpochProps {
  minimum?: number;
  maximum?: number;
}

/**
 * Draws an epoch millisecond inside the requested bounds.
 *
 * Shared by the `date` and `date-time` generators, which had the same bound
 * expression written twice: `props?.maximum ?? props?.minimum === undefined`
 * parses as `props?.maximum ?? (props?.minimum === undefined)` because `??`
 * binds looser than `===`, so any supplied `maximum` made the condition truthy
 * and was replaced by `Date.now()`, while `maximum: 0` fell through to
 * `undefined + one year` and produced `NaN` (issue #2287). Keeping the
 * resolution in one place is what stops the two copies from drifting again.
 *
 * With no bound at all the window ends at the present instant; with only a
 * lower bound it spans one year from there.
 */
export const __randomEpoch = (props?: __IEpochProps): number => {
  const minimum: number = props?.minimum ?? 0;
  const maximum: number =
    props?.maximum ??
    (props?.minimum === undefined ? Date.now() : props.minimum + YEAR);
  return _randomInteger({
    type: "integer",
    minimum,
    maximum,
  });
};

const YEAR = 365 * 24 * 60 * 60 * 1_000;
