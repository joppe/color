import { adjust } from './adjust';
import { RGB } from '../rgb/RGB';

export function darken(color: RGB, percentage: number = 10): RGB {
    if (percentage < 0 || percentage > 100) {
        throw new Error(`Please use a percentage between 0-100, instead of "${percentage}"`);
    }

    return adjust(color, -percentage);
}
