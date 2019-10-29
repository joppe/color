import { HSL} from '../hsl/HSL';
import { RGB } from '../rgb';
import { toHSL } from '../rgb/toHSL';
import { toRGB} from '../hsl/toRGB';

export function adjust(color: RGB, percentage: number): RGB {
    const hsl: HSL = toHSL(color);

    if (percentage < -100 || percentage > 100) {
        throw new Error(`Please use a percentage between -100 and 100, instead of "${percentage}"`);
    }

    hsl.l = Math.max(0, Math.min(1, hsl.l + (percentage / 100)));

    return toRGB(hsl);
}
