import styles from "./playground.module.css";

// https://github.com/GoogleFeud/ts-runtime-checks/blob/main/playground/components/Runnable.tsx
const ConsoleViewer = (props: ConsoleViewer.IProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "265px",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {props.messages
        .map((msg, i) => [
          <p style={{ fontSize: 10 }}>
            <span className={styles.code}>
              {"["}
              <span
                style={{
                  color:
                    msg.type === "error"
                      ? "red"
                      : msg.type === "warn"
                        ? "yellow"
                        : "green",
                  fontWeight: "bold",
                }}
              >
                {msg.type.toUpperCase()}
              </span>
              {"]: "}
            </span>
            <span className={styles.code}>{formatValue(msg.value)}</span>
          </p>,
          ...(i === props.messages.length - 1
            ? []
            : [<div className={styles.logSeparator} />]),
        ])
        .flat()}
    </div>
  );
};
namespace ConsoleViewer {
  export interface IProps {
    messages: IMessage[];
  }
  export interface IMessage {
    type: "error" | "log" | "warn";
    value: any;
  }
}

function formatObjectLike(
  obj: [string | number | symbol, unknown][],
  original: any,
  nestIdent?: number,
  extraCode?: string,
): JSX.Element {
  return (
    <>
      <span className={styles.code}>
        <span className={styles.classNameIdent}>
          {(original.constructor &&
            original.constructor.name &&
            original.constructor.name !== "Object" &&
            original.constructor.name + " ") ||
            ""}
        </span>
        {extraCode ?? ""}
        {"{"}
        <br />
        <span>
          {obj.map(([key, val], index) => (
            <span key={index}>
              {!!index && (
                <>
                  <span className={styles.comma}>, </span>
                  <br />
                </>
              )}
              <span>
                {"  ".repeat(nestIdent || 2)}
                {key.toString()}: {formatValue(val, (nestIdent || 2) + 1)}
              </span>
            </span>
          ))}
        </span>
        <br />
        {"  ".repeat(nestIdent ? nestIdent - 1 : 1) + "}"}
      </span>
    </>
  );
}

function formatValue(obj: unknown, nestIdent = 0): JSX.Element {
  if (typeof obj === "string")
    return (
      <span className={`${styles.code} ${styles.string}`}>
        "
        {obj
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")}
        "
      </span>
    );
  else if (typeof obj === "number")
    return <span className={`${styles.code} ${styles.number}`}>{obj}</span>;
  else if (typeof obj === "function")
    return <span className={styles.code}>[Function]</span>;
  else if (obj === undefined)
    return (
      <span className={`${styles.code} ${styles.keyword}`}>undefined</span>
    );
  else if (obj === null)
    return <span className={`${styles.code} ${styles.keyword}`}>null</span>;
  else if (obj === true)
    return <span className={`${styles.code} ${styles.keyword}`}>true</span>;
  else if (obj === false)
    return <span className={`${styles.code} ${styles.keyword}`}>false</span>;
  else if (Array.isArray(obj))
    return (
      <span className={styles.code}>
        [
        {obj.map((element, index) => (
          <span key={index}>
            {!!index && <span className={styles.comma}>, </span>}
            {formatValue(element, nestIdent + 1)}
          </span>
        ))}
        ]
      </span>
    );
  else if (obj instanceof Map)
    return formatObjectLike(
      [...obj.entries()],
      obj,
      nestIdent,
      `(${obj.size}) `,
    );
  else if (obj instanceof Set)
    return (
      <span className={styles.code}>
        <span className={styles.classNameIdent}>Set </span>({obj.size}){" {"}
        {[...obj.values()].map((element, index) => (
          <span key={index}>
            {!!index && <span className={styles.comma}>, </span>}
            {formatValue(element, nestIdent + 1)}
          </span>
        ))}
        {"}"}
      </span>
    );
  else {
    const entries = Object.entries(obj);
    if (entries.length === 0) return <>{"{}"}</>;
    else return formatObjectLike(entries, obj, nestIdent);
  }
}

export default ConsoleViewer;
