import { createHash } from "crypto";


export default function hashString (
    string: string,
    length: number = Infinity
): string {
    const hash = createHash('md5').update(string).digest('hex');

    if (length > 0 && length < hash.length) {
        return hash.substring(0, length);
    }

    return hash;
}
