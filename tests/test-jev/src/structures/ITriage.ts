/** Triage decision a Jev evaluation answers. */
export interface ITriage {
  /** Is the ticket urgent? */
  urgent: boolean;

  /** Which team owns the ticket? */
  team: "billing" | "technical";

  /** How severe is the ticket? */
  severity: 1 | 2 | 3;
}
export namespace ITriage {
  /**
   * Native Jev answers deciding `{ urgent: true, team: "billing", severity: 1
   * }`.
   */
  export const answers = () => ({
    urgent: { type: "noul", noul: 0.8 },
    team: {
      type: "choice",
      choice: "billing",
      probabilities: { billing: 0.9, technical: 0.1 },
      confidence: 0.9,
    },
    severity: {
      type: "score",
      score: 0.2,
      probabilities: { "0": 0.8, "1": 0.2, "2": 0 },
      legend: { "0": "1", "1": "2", "2": "3" },
      confidence: 0.8,
    },
  });

  export const decision: ITriage = {
    urgent: true,
    team: "billing",
    severity: 1,
  };
}
