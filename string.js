export const len = str => str.length;

export const at = (string, index) => string.at(index);
export const at$ = string => index => at(string, index);
export const at_by = (index, string) => at(string, index);
export const at_by$ = index => string => at(string, index);

export const char_code_at = (string, index) => string.charCodeAt(index);
export const char_code_at$ = string => index => char_code_at(string, index);
export const char_code_at_by = (index, string) => char_code_at(string, index);
export const char_code_at_by$ = index => string => char_code_at(string, index);

export const code_point_at = (string, index) => string.codePointAt(index);
export const code_point_at$ = string => index => code_point_at(string, index);
export const code_point_at_by = (index, string) => code_point_at(string, index);
export const code_point_at_by$ = index => string => code_point_at(string, index);

export const ends_with = (string, substring, end) => string.endsWith(substring, end);
export const ends_with$ = string => (substring, index) => ends_with(string, substring, index);
export const ends_with_by = (substring, index, string) => ends_with(string, substring, index);
export const ends_with_by$ = (substring, index) => string => ends_with(string, substring, index);

export const from_char_code = String.fromCharCode;
export const from_code_point = String.fromCodePoint;

export const replace = (string, regex, substitution) => string.replace(regex, substitution);
export const replace_by = (regex, substitution) => string => replace(string, regex, substitution)
export const replace_by$ = (regex, substitution) => string => replace(string, regex, substitution);

export const includes = (string, substring, start) => string.includes(substring, start);
export const includes$ = string => (substring, start) => includes(string, substring, start);
export const includes_by = (substring, start, string) => includes(string, substring, start);
export const includes_by$ = (substring, start) => string => includes(string, substring, start);

export const lower = string => string.toLowerCase();
export const upper = string => string.toUpperCase();
export const trim = string => string.trim();
export const is_well_formed = string => string.isWellFormed();

export const split = (string, on) => string.split(on);
export const split$ = string => on => split(string, on);
export const split_by = (on, string) => split(string, on);
export const split_by$ = on => string => split(string, on);

export const index_of = (string, substring, start) => string.indexOf(substring, start);
export const index_of$ = string => (substring, start) => index_of(string, substring, start);
export const index_of_by = (substring, start) => string => index_of(string, substring, start);
export const index_of_by$ = (substring, start) => string => index_of(string, substring, start);

export const index_last_of = (string, substring, start) => string.indexOf(substring, start);
export const index_last_of$ = string => (substring, start) => index_last_of(string, substring, start);
export const index_last_of_by = (substring, start) => string => index_last_of(string, substring, start);
export const index_last_of_by$ = (substring, start) => string => index_last_of(string, substring, start);

export const index_last = (string, substring) => string.lastIndexOf(substring);

export const slice = (string, start, end) =>
  end
    ? string.slice(start, end)
    : string.slice(start);

// export const split_maybe = (string, on) => string ? string.split(on) : [];

export const eq = (a, b) => a === b;
export const eq$ = a => b => eq(a, b);

export const is = val => typeof val === 'string';

export const newlines = str => {
  let i = -1;
  let index = -1;
  do {
    index = str.indexOf('\n', ++index);
    i += 1;
  } while (index >= 0);

  return i;
};
