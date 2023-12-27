export type Mods = Record<string, boolean | string | undefined>;

// Функция генерирует строки с CSS классами на основе переданных параметров
// (нужно для создания динамических и переиспользуемых классов)
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = []
) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
}
