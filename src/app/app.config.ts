import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './utils/templatePageTitleStrategy';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes,
            withInMemoryScrolling({ anchorScrolling: 'disabled', scrollPositionRestoration: 'disabled' }),
            withViewTransitions()
        ),
        { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }
    ]
};