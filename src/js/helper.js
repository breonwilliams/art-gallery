import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all solid icons to the library
library.add(fas);

// Replace any existing `<i>` tags with Font Awesome SVGs
dom.watch();

import { far } from '@fortawesome/free-regular-svg-icons'; // Regular style icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons

library.add(far, fab);




import './photoswipe/init';