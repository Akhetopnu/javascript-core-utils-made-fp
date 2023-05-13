export const read = JSON.parse;
export const read$ = text => reviver => read(text, reviver);
export const read_by = reviver => text => read(text, reviver);
export const read_by$ = (reviver, text) => read(text, reviver);

export const read_safe = (text, reviver) => {
  let result = null;
  try {
    result = read(text, reviver);
  } catch (error) {
    console.error('Could not parse message:', text);
  } finally {
    return result;
  }
}
export const read_safe$ = text => reviver => read_safe(text, reviver);
export const read_safe_by = reviver => text => read_safe(text, reviver);
export const read_safe_by$ = (reviver, text) => read_safe(text, reviver);

export const write = JSON.stringify;
export const write_by = replacer => value => write(value, replacer);
export const write_pretty = (space = 3) => value => write(value, null, space);
