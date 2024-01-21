import { Component } from '@angular/core';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'w-header',
    standalone: true,
    imports: [NgbCollapse, NgbNavModule],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    isMenuCollapsed = false;
    active = 1;

    ngAfterViewInit() {
        document.addEventListener('scroll', this.onPageScroll, true);
    }

    ngOnDestroy() {
        document.removeEventListener('scroll', this.onPageScroll);
    }

    onPageScroll(event: Event) {
        if (document.documentElement.scrollTop > 90) {
            if (!document.getElementById("header-nav")?.classList.contains('nav-scroll')) {
                document.getElementById("header-nav")?.classList.add('nav-scroll');
            }
        } else {
            document.getElementById("header-nav")?.classList.remove('nav-scroll');
        }
    }

    scrollTo(elementId: string) {
        // this.resetMobileMenu();
        document.getElementById("#" + elementId)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    scrollTop() {
        // this.resetMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    scrollBottom() {
        // this.resetMobileMenu();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    resetMobileMenu() {
        if (this.isMenuCollapsed)
            this.isMenuCollapsed = false;
    }

}
