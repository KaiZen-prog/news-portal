type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  let modsString = '';

  if (Object.keys(mods).length > 0) {
    modsString = Object.keys(mods)
      .filter((mod) => mods[mod])
      .reduce((accumulator, mod) => {
        if (accumulator !== '') {
          accumulator += ' ';
        }
        return accumulator + mod;
      });
  }

  return [
    cls,
    ...additional,
    modsString
  ].join(' ');
}
