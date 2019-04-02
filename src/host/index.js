import dev_host        from '@/host/dev.json';
import release_host    from '@/host/release.json';
import NODE_ENV        from '@/host/env';

const DEV_HOST     = dev_host;
const RELEASE_HOST = release_host;

const CONFIG = {
    SYS_INFO:   NODE_ENV
};

let host = '';

switch (CONFIG.SYS_INFO.id) {
    case 'development':
        host = DEV_HOST;
        break;
    case 'release':
        host = RELEASE_HOST;
        break;
}

export const HOST = host;
