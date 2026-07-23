package factories

func formatCheatSheet_RegexCall(text string) string {
  return text + ".test($input)"
}

// formatCheatSheet_ALIASES maps an alternative `@format` spelling onto the
// canonical FormatCheatSheet key it means.
//
// An alias owns no validator. It resolves to the cheat sheet entry through
// formatCheatSheet_resolve, so FormatCheatSheet stays the single owner of every
// format's validator and a correction to one reaches every spelling of it. The
// aliases previously carried validator strings of their own, which made each of
// them a second implementation sharing a name and free to drift: `datetime`
// emitted `format: "date-time"` while validating with `new Date`, so it accepted
// February 30th and rejected the RFC 3339 leap second the cheat sheet handles.
//
// Aliases live beside the cheat sheet so that enumerating this file enumerates
// every owner of the `@format` contract.
var formatCheatSheet_ALIASES = map[string]string{
  "datetime": "date-time",
  "dateTime": "date-time",
}

// formatCheatSheet_resolve resolves a written `@format` value to the canonical
// format name and the validator FormatCheatSheet owns for it, reporting whether
// the value names a supported format at all.
func formatCheatSheet_resolve(value string) (string, string, bool) {
  name := value
  if canonical, ok := formatCheatSheet_ALIASES[value]; ok {
    name = canonical
  }
  validate, ok := FormatCheatSheet[name]
  if ok == false {
    return "", "", false
  }
  return name, validate, true
}

var FormatCheatSheet = map[string]string{
  "byte":                  `/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test($input)`,
  "password":              "true",
  "regex":                 "(() => { try { new RegExp($input); return true; } catch { return false; } })()",
  "uuid":                  "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
  "email":                 "/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($input)",
  "hostname":              "/^(?=.{1,253}\\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\\.?$/i.test($input)",
  "idn-email":             "/^(([^<>()[\\]\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$/i.test($input)",
  "idn-hostname":          "/^(?=.{1,253}\\.?$)[a-z0-9\\u00a1-\\uffff](?:[a-z0-9\\u00a1-\\uffff-]{0,61}[a-z0-9\\u00a1-\\uffff])?(?:\\.[a-z0-9\\u00a1-\\uffff](?:[a-z0-9\\u00a1-\\uffff-]{0,61}[a-z0-9\\u00a1-\\uffff])?)*\\.?$/i.test($input)",
  "iri":                   `(() => !/[\u0000-\u0020\u007f-\u009f\ud800-\udfff"<>\\^\x60{|}]/u.test($input) && !/%(?![0-9A-Fa-f]{2})/u.test($input) && /^[A-Za-z][A-Za-z0-9+.-]*:/u.test($input))()`,
  "iri-reference":         `(() => { if (/[\u0000-\u0020\u007f-\u009f\ud800-\udfff"<>\\^\x60{|}]/u.test($input) || /%(?![0-9A-Fa-f]{2})/u.test($input)) return false; const colon = $input.indexOf(":"); const boundary = $input.search(/[/?#]/u); return colon === -1 || (boundary !== -1 && boundary < colon) || /^[A-Za-z][A-Za-z0-9+.-]*:/u.test($input); })()`,
  "ipv4":                  "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/.test($input)",
  "ipv6":                  `/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i.test($input)`,
  "uri":                   "/\\/|:/.test($input) && /^(?:[a-z][a-z0-9+\\-.]*:)(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\\?(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test($input)",
  "uri-reference":         "/^(?:(?:[a-z][a-z0-9+\\-.]*:)?(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)?|(?:[a-z][a-z0-9+\\-.]*:)(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|(?:[a-z0-9\\-._~!$&'()*+,;=@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\\?(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test($input)",
  "uri-template":          "/^(?:(?:[^\\x00-\\x20\"'<>%\\\\^`{|}]|%[0-9a-f]{2})|\\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?)*\\})*$/i.test($input)",
  "url":                   "/^(?:https?|ftp):\\/\\/(?:[^\\s/?#@]+(?::[^\\s/?#@]*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?=.{1,253}(?::\\d{2,5})?(?:\\/[^\\s]*)?$)(?:[a-z0-9\\u00a1-\\uffff](?:[-a-z0-9\\u00a1-\\uffff]{0,61}[a-z0-9\\u00a1-\\uffff])?\\.)+(?:[a-z\\u00a1-\\uffff](?:[-a-z0-9\\u00a1-\\uffff]{0,61}[a-z0-9\\u00a1-\\uffff])))(?::\\d{2,5})?(?:\\/[^\\s]*)?$/iu.test($input)",
  "date-time":             `(() => { const match = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])[Tt]((?:[01][0-9]|2[0-3])):([0-5][0-9]):([0-5][0-9]|60)(?:\.[0-9]+)?(?:[Zz]|([+-])((?:[01][0-9]|2[0-3])):([0-5][0-9]))$/.exec($input); if (match === null) return false; const year = Number(match[1]); const month = Number(match[2]); const day = Number(match[3]); if (day > [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1] + (month === 2 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 1 : 0)) return false; if (match[6] !== "60") return true; const instant = new Date(0); instant.setUTCFullYear(year, month - 1, day); instant.setUTCHours(Number(match[4]), Number(match[5]), 0, 0); const offset = match[7] === undefined ? 0 : (match[7] === "+" ? 1 : -1) * (Number(match[8]) * 60 + Number(match[9])); instant.setUTCMinutes(instant.getUTCMinutes() - offset); return instant.getUTCHours() === 23 && instant.getUTCMinutes() === 59 && ((instant.getUTCMonth() === 5 && instant.getUTCDate() === 30) || (instant.getUTCMonth() === 11 && instant.getUTCDate() === 31)); })()`,
  "date":                  `(() => { const match = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.exec($input); if (match === null) return false; const year = Number(match[1]); const month = Number(match[2]); const day = Number(match[3]); return day <= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1] + (month === 2 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 1 : 0); })()`,
  "time":                  `(() => { const match = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(?:\.[0-9]+)?(?:[Zz]|([+-])((?:[01][0-9]|2[0-3])):([0-5][0-9]))$/.exec($input); if (match === null) return false; if (match[3] !== "60") return true; const offset = match[4] === undefined ? 0 : (match[4] === "+" ? 1 : -1) * (Number(match[5]) * 60 + Number(match[6])); const minutes = Number(match[1]) * 60 + Number(match[2]) - offset; return ((minutes % 1440) + 1440) % 1440 === 1439; })()`,
  "duration":              "/^P(?!$)((\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?|(\\d+W)?)$/.test($input)",
  "json-pointer":          "/^(?:\\/(?:[^~/]|~0|~1)*)*$/.test($input)",
  "relative-json-pointer": "/^(?:0|[1-9][0-9]*)(?:#|(?:\\/(?:[^~/]|~0|~1)*)*)$/.test($input)",
}
